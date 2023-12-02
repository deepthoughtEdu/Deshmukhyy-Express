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
        return `<option ${type == selected ? 'selected="true"' : ""} value="${type}">${types[type].label}</option>`
  }).join('');
  return  `<select class="custom-select status" name="status">${html}</select>`
}

function initialize() {
    renderNewRequestsTable();
    renderAcceptedRequestsTable();
    renderCompletedRequestsTable();

    $('body').on('click', '[data-request-id]', function () {
        let id = $(this).data('request-id');
        let data = {
            status: 'approved'
        }

        if (!confirm('Are you sure to accept?')) return;

        $.ajax({
            url: `/api/app/status/${id}`,
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

function renderNewRequestsTable () {
    const loggedInUser = $('#user').data('user');

    let orderDetailsTable = new Table({
        target:'#order-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Requested Orders',value:'order'},
            {title:"Category",value:'category'},
            {title:"Time",value:'category'},
            {title:"Fare",value:'category'},
            {title:"Action",value:'category'},
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
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: requirement.charAt(0).toUpperCase() + requirement.slice(1),
                    category: category.charAt(0).toUpperCase() + category.slice(1),
                    time: row.time,
                    fare: row.fare,
                    action: getSelect(row.status || 'pending')
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/app?role=delivery-partner&status=pending`);

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

function renderAcceptedRequestsTable () {
    const loggedInUser = $('#user').data('user');

    let orderDetailsTable = new Table({
        target:'#accepted-order-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Requested Orders',value:'order'},
            {title:"Category",value:'category'},
            {title:"Time",value:'category'},
            {title:"Fare",value:'category'},
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
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: requirement.charAt(0).toUpperCase() + requirement.slice(1),
                    category: category.charAt(0).toUpperCase() + category.slice(1),
                    time: row.time,
                    fare: row.fare,
                }
            }
        })
    }
    orderDetailsTable.render(`/api/app?role=delivery-partner&status=approved&acceptedBy=${loggedInUser.userId}`);
}

function renderCompletedRequestsTable () {
    const loggedInUser = $('#user').data('user');

    let orderDetailsTable = new Table({
        target:'#completed-order-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Requested Orders',value:'order'},
            {title:"Category",value:'category'},
            {title:"Time",value:'category'},
            {title:"Fare",value:'category'},
            {title:"Status",value:'category'},
            {title:"Rating",value:'category'},
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
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: requirement.charAt(0).toUpperCase() + requirement.slice(1),
                    category: category.charAt(0).toUpperCase() + category.slice(1),
                    time: row.time,
                    fare: row.fare,
                    status: 'Completed',
                    rating: row.rating + ' star',
                }
            }
        })
    }
    orderDetailsTable.render(`/api/app?role=delivery-partner&status=completed&acceptedBy=${loggedInUser.userId}`);
}






