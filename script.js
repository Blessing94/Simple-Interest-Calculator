function compute()
{
    principal = Number(document.getElementById("principal").value);
    // Validation, only positive numbers
    if (principal = "" || principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
    }
    rate = Number(document.getElementById("rate").value);
    years = Number(document.getElementById("years").value);
    // calculating interest
    interest = principal * years * rate /100;
    // the new year for the interest
    new_year=(Number(new Date().getFullYear())+years);
    // when you click "compute interest"
    document.getElementById("result").innerHTML="If you deposit <span class='var'>"+principal+"</span>,<br>at an interest rate of <span class='var'>"+ rate +"</span>%.<br>You will receive an amount of <span class='var'>"+interest+"</span>,<br> in the year <span class='var'>"+new_year+"</span>"
}
function range_change(){
    document.getElementById("num_rate").innerHTML=document.getElementById("rate").value+"%"
}
    
