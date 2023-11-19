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
        label:"Interested",
        isSelected:false
    },
    waiting : {
        label:"Waiting",
        isSelected:true
    },
    notInterested : {
        label:"Not Interested",
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
        target:'#_____________',
        columns:[
            {title:"__________"}, // S No
            {title:"__________"}, // Movie
            {title:"__________"}, //Category
            {title:"__________"}, //Time
            {title:"__________"}, //Duration
            {title:"__________"}, //Fare
            {title:"__________"}, //Organizer
            {title:"__________"}, //Status
        ],
        formatter: formatTableResponse
    })

    function formatTableResponse(data, from=0){
        return data.map(function(row,index){
            return {
                attributes: {
                    id: row._id
                },
                classes: classes.type[row.status],
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: ____________,
                    category: row.category.charAt(0).toUpperCase() + row.category.slice(1),
                    time: ___________,
                    duration: ____________ + ' hour',
                    fare: ____________,
                    organizedby: row.user.username,
                    status: getSelect(row.status || 'waiting'),
                    
                }
            }
        })
    }
    
    orderDetailsTable.render(`______________`);

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

    })
}






