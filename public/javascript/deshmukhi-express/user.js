$(window).on('load', initialize);
const classes = {
    type:{
        completed:"table-success",
        approved: "table-info",
        pending:  "table-warning"
    }
}

const types = {
    approved : {
        label:"Approved",
        isSelected:false
    },
    pending : {
        label:"Pending",
        isSelected:false
    },
    completed : {
        label:"Completed",
        isSelected:false
    }
};

function getSelect(selected){
  let html =  Object.keys(types).map(type => {
        return ` <option ${type == selected ? 'selected' : ""} value="${type}">${types[type].label}</option>`
  }).join('');
  return  `<select disabled class="custom-select status" name="status">${html}</select>`
}


function initialize() {

    $('#request-form').on('submit', function (e) {
        e.preventDefault();

        const formData = {};
        const data = $(this).serializeArray();

        data.forEach(({ name, value }) => {
            formData[name] = value;
        });

        $.ajax({
            url: '/api/request',
            method: 'post',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(formData),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Your request is saved successfully.',
                    'success'
                ).then(e => location.reload())
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
        ],
        formatter: formatOrderDetailsTableResponse,
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            let requirement = row.requirement || '';
            let category = row.category || '';

            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: requirement.charAt(0).toUpperCase() + requirement.slice(1),
                    category: category.charAt(0).toUpperCase() + category.slice(1),
                    time: row.time,
                    fare: row.fare,
                    status: getSelect(row.status || 'pending'),
                    
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/request?role=user`);

}