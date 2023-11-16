$(window).on('load', initialize);

const classes = {
    type:{
        cancelled:"table-danger",
        confirmed: "table-success",
        waiting:  "table-warning"
    }
}

const types = {
    confirmed : {
        label:"Confirmed",
        isSelected:false
    },
    waiting : {
        label:"Waiting",
        isSelected:false
    },
    cancelled : {
        label:"Cancelled",
        isSelected:false
    }
};

function getSelect(selected){
  let html =  Object.keys(types).map(type => {
        return ` <option ${type == selected ? 'selected' : ""} value="${type}">${types[type].label}</option>`
  }).join('');
  return  `<select class="custom-select status" name="status">${html}</select>`
}

function initialize() {
    let orderDetailsTable = new Table({
        target:'#movie-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Name',value:'name'},
            {title:"Release Year",value:'releaseYear'},
            {title:"Rating",value:'rating'},
            {title:"ShowTime",value:'showTime'},
            {title:"Fare",value:'fare'},
            {title:"Status",value:'status'},
        ],
        formatter: formatOrderDetailsTableResponse,
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            let title = row.title || '';

            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    title: title.charAt(0).toUpperCase() + title.slice(1),
                    releaseYear: row.releaseYear,
                    rating: row.rating,
                    showTime: row.showTime,
                    fare: row.fare,
                    status: getSelect(row.status || 'confirmed'),
                    
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/movie`);


    $('#movie-details').on('change','select.status',function(){
        let value = $(this).val();
        let _classes = Object.keys(classes.type).map(e => classes.type[e]).join(' ');
        let _class = classes.type[value] || "";

        let $tr = $(this).parents('tr').first();
        let id = $tr.data('id');
       
        $tr.removeClass(_classes).addClass(_class);

        let data = {
            status: value
        }

        $.ajax({
            url: `/api/movie/${id}`,
            method: 'put',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Movie status updated successfully.',
                    'success'
                )
            },
            error: function ({responseJSON, statusText}) {
                let message = statusText;
                if (responseJSON) {
                    message = responseJSON.status.message;
                }

                Swal.fire(
                    'Error!',
                    message,
                    'error'
                );
            }
        })
    })
}