

$('#dataTable').DataTable();

function getColor(daysRemaining, index){
    console.log(daysRemaining);
    if(daysRemaining == 'SLA Breached'){
        document.getElementById('row_'+index).style.color = 'red';
    }
}