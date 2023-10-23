$(window).on('load', initialize);

function initialize() {
    let orderDetailsTable = new Table({
        target:'#order-details',
        columns:[
            {title:'S.No',value:'sno'},
            {title:'Requested Orders',value:'order'},
            {title:"Category",value:'category'},
            {title:"Time",value:'category'},
            {title:"Fare",value:'category'},
            {title:"Status",value:'category'},
        ],
        formatter: formatOrderDetailsTableResponse
    })

    function formatOrderDetailsTableResponse(data, from=0){
        return data.map(function(row,index){
            return {
                attributes: {
                    tid: row.tid
                },
                data: {
                    Sno:`${(from + (index + 1))}`,
                    ordername: row.title,
                    category: `hello`,
                    time: `hello`,
                    fare: `hi`,
                    status: `hi`,
                }
            }
        })
    }
    
    orderDetailsTable.render(`/api/request`);

}