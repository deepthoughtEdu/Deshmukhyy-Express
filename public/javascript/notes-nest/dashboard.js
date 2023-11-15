$(window).on('load', initialize);

const classes = {
    type:{
        inactive: "table-danger",
        published: "table-success",
        draft: "table-warning"
    }
};

const types = {
    published : {
        label:"Published",
        isSelected:false
    },
    draft : {
        label:"Draft",
        isSelected:false
    },
    inactive : {
        label:"Inactive",
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
        target:'#note-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Title',value:'title'},
            {title:'Content',value:'content'},
            {title:'Subject',value:'Subject'},
            {title:'Status',value:'status'},
        ],
        formatter: formatOrderDetailsTableResponse,
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            let content = row.content || '';
            let title = row.title || '';

            content = String(content).substr(0, 30) + '...';

            return {
                attributes: {
                    id: row._id
                },
                classes:classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    title: title,
                    content: content,
                    subject: row.subject || 'None',
                    status: getSelect(row.status || 'published'),
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/note`);


    $('#note-details').on('change','select.status',function(){
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
            url: `/api/note/${id}`,
            method: 'put',
            cache: false,
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function () {
                Swal.fire(
                    'Success!',
                    'Note status updated successfully.',
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