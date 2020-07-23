// 1. Show an alert box on click on a link

function linkCLick(){
    alert('Link was Clicked');
}

// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.

function mobile(){
    alert("Thanks for purchassing a phone from us")
}

function dlt(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab").deleteRow(i);  
}

function imagebefore(){
    var s = document.getElementById('pic');
    s.src = "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/Black/Apple-iPhone-11-Black-frontimage.jpg";
}
function imageafter(){
    var s = document.getElementById('pic');
    s.src = "https://alexnld.com/wp-content/uploads/2020/01/MPD7855J_1.jpg";
}

function increaseCounter(){
    var counterIncrease = document.getElementById('counterNumber').innerHTML;
    counterIncrease++;
    document.getElementById('counterNumber').innerHTML = counterIncrease;
}
function decreaseCounter(){
    var counterDecrease = document.getElementById('counterNumber').innerHTML;
    counterDecrease--;
    document.getElementById('counterNumber').innerHTML = counterDecrease;
    
}

