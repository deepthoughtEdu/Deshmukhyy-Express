$(window).on('load', initialize);

const classes = {
    type:{
        cancelled:"table-danger",
        approved: "table-success",
        waiting:  "table-warning"
    }
}

let types = {
    approved : {
        label:"Approved",
        isSelected:false
    },
    waiting : {
        label:"Wait",
        isSelected:false
    },
    cancelled : {
        label:"Cancel",
        isSelected:false
    }
};

function getSelect(selected){
  let html =  Object.keys(types).map(type => {
        return ` <option ${type == selected ? 'selected="true"' : ""} value="${type}">${types[type].label}</option>`
  }).join('');
  return  `<select class="custom-select status" name="status">${html}</select>`
}

function initialize() {
    let orderDetailsTable = new Table({
        target:'#movie-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Name',value:'name'},
            {title:"Genre",value:'genre'},
            {title:"Director",value:'director'},
            {title:"Release Year",value:'releaseYear'},
            {title:"Status",value:'status'},
        ],
        formatter: formatOrderDetailsTableResponse,
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            let title = row.title || '';
            let genre = row.genre || '';

            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    title: title.charAt(0).toUpperCase() + title.slice(1),
                    genre: genre.charAt(0).toUpperCase() + genre.slice(1),
                    director: row.director,
                    releaseYear: row.releaseYear,
                    status: getSelect(row.status || 'approved'),
                    
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/movie`);


    $('#order-details').on('change','select.status',function(){
        let value = $(this).val();
        let _classes = Object.keys(classes.type).map(e => classes.type[e]).join(' ');
        let _class = classes.type[value] || "";

        let $tr = $(this).parents('tr').first();
        let id = $tr.data('id');
       
        $tr.removeClass(_classes).addClass(_class);

        let data = {
            status: value
        }

        // As of now blocking the functionality
        return

        $.ajax({
            url: `/api/request/${id}`,
            method: 'put',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Order status updated successfully.',
                    'success'
                )
            },
            error: function () {
                Swal.fire(
                    'Error!',
                    'Something went wrong.',
                    'error'
                );
            }
        })
    })
}