$(window).on('load', initialize);

const classes = {
    type:{
        star1: "table-dark",
        star2: "table-danger",
        star3: "table-warning",
        star4: "table-active",
        star5: "table-success"
    }
}

const types = {
    star1 : {
        label:"1 ⭐",
        isSelected:false
    },
    star2 : {
        label:"2 ⭐⭐",
        isSelected:false
    },
    star3 : {
        label:"3 ⭐⭐⭐",
        isSelected:false
    },
    star4 : {
        label:"4 ⭐⭐⭐⭐",
        isSelected:false
    },
    star5 : {
        label:"5 ⭐⭐⭐⭐⭐",
        isSelected:false
    },
};

function getSelect(selected, status, id){
  let html =  Object.keys(types).map(type => {
        return ` <option ${type == selected ? 'selected' : ""} value="${type}">${types[type].label}</option>`
  }).join('');
  return  `<select ${(status == 'completed' || status == 'pending') ? 'disabled' : ''} id="previous-order-details" data-request-id="${id}" class="custom-select status" name="status">${html}</select>`
}


function initialize() {

    let orderDetailsTable = new Table({
        target:'.my-requests-table',
        params: {
            role: 'user'
        },
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Requested Orders',value:'order'},
            {title:"Category",value:'category'},
            {title:"Time",value:'category'},
            {title:"Fare",value:'category'},
            {title:"Status",value:'category'},
            {title:"Rate delivery",value:'category'},
        ],
        formatter: formatOrderDetailsTableResponse,
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: row.requirement.charAt(0).toUpperCase() +  row.requirement.slice(1) || '',
                    category: row.category.charAt(0).toUpperCase() + row.category.slice(1) || '',
                    time: row.time,
                    fare: row.fare,
                    status: row.status.charAt(0).toUpperCase() + row.status.slice(1) || '',
                    rate: getSelect(row.rating, row.status, row._id || '--')
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/app?role=user`);

    $('body').on('change', '#previous-order-details', function () {
        let id = $(this).data('request-id');
        let value = $(this).val();
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