$(window).on('load', initialize);

const classes = {
    type:{
        1: "table-dark",
        2: "table-danger",
        3: "table-warning",
        4: "table-active",
        5: "table-success"
    }
}

const types = {
    1 : {
        label:"1 ⭐",
        isSelected:false
    },
    2 : {
        label:"2 ⭐⭐",
        isSelected:false
    },
    3 : {
        label:"3 ⭐⭐⭐",
        isSelected:false
    },
    4 : {
        label:"4 ⭐⭐⭐⭐",
        isSelected:false
    },
    5 : {
        label:"5 ⭐⭐⭐⭐⭐",
        isSelected:false
    },
};

function getSelect(selected, status, id){
  let html =  Object.keys(types).map(type => {
        return ` <option ${type == selected ? 'selected' : ""} value="${type}">${types[type].label}</option>`
  }).join('');
  return  `<select ${(status == 'completed' || status == 'pending') ? 'disabled' : ''} id="previous-order-details" data-request-id="${id}" class="custom-select rating" name="rating">${html}</select>`
}

function initialize() {

    let orderDetailsTable = new Table({
        target:'#order-details',
        params: {
            role: 'user'
        },
        columns:[
            {title:'S.No'},
            {title:'Requested Orders'},
            {title:"Category"},
            {title:"Time"},
            {title:"Fare"},
            {title:"Accepted By"},
            {title:"Status"},
            {title:"Rating"},
        ],
        formatter: formatOrderDetailsTableResponse,
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.rating],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: row.requirement.charAt(0).toUpperCase() +  row.requirement.slice(1) || '',
                    category: row.category.charAt(0).toUpperCase() + row.category.slice(1) || '',
                    time: row.time,
                    fare: row.fare,
                    acceptedBy: row.acceptedByUser.username?row.acceptedByUser.username:'--' ,
                    status: row.status.charAt(0).toUpperCase() + row.status.slice(1) || '',
                    rate: getSelect(row.rating, row.status, row._id || '--')
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/app?role=user`);

    $("#order-details").on('change', 'select.rating', function () {
        let id = $(this).data('request-id');
        let value = $(this).val();
        let _classes = Object.keys(classes.type).map(e => classes.type[e]).join(' ');
        let _class = classes.type[value] || "";

        let $tr = $(this).parents('tr').first();
        $tr.removeClass(_classes).addClass(_class);

        let data = {
            rating: value,
        }

        if (!confirm('Are you sure? This cannot be un-done.')) return;

        $.ajax({
            url: `/api/app/rating/${id}`,
            method: 'put',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Rated successfully.',
                    'success'
                ).then(r => location.reload())
            },
            error: function () {
                Swal.fire(
                    'Error!',
                    'Something went wrong.',
                    'error'
                );
            }
        })
    });

}