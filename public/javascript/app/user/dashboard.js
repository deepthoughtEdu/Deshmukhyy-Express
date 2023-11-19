$(window).on('load', initialize);

const classes = {
    type:{
        notInterested:"table-danger",
        interested:"table-success",
        waiting:"table-warning"
    }
}

let types = {
    interested : {
        label:"Intrested",
        isSelected:false
    },
    waiting : {
        label:"Waiting",
        isSelected:true
    },
    notInterested : {
        label:"Not Intrested",
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
        target:'#show-details',
        columns:[
            {title:"S.No"},
            {title:"Movie"},
            {title:"Category"},
            {title:"Time"},
            {title:"Duration(hr)"},
            {title:"Fare"},
            {title:"Organized by"},
            {title:"Status"},
        ],
        formatter: formatTableResponse
    })

    function formatTableResponse(data, from=0){
        console.log(data);
        return data.map(function(row,index){
            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: row.moviename,
                    category: row.category.charAt(0).toUpperCase() + row.category.slice(1),
                    time: row.time,
                    duration: row.duration,
                    fare: row.fare,
                    organizedby: row.user.username,
                    status: getSelect(row.status || 'waiting'),
                    
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/app`);
    $('#show-details').on('change','select.status',function(){
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
            url: `/api/app/${id}`,
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






