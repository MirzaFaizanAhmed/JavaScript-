var row=1;

function submission(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var fthrname = document.getElementById("fthrname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var course = document.getElementById("course").value;

    if(!fname || !lname || !fthrname || !email || !contact || !address || !city || !country || !course){
        alert ('Please Enter All Fields');
        return;
    }
    else{

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    var cell6 = newRow.insertCell(6);
    var cell7 = newRow.insertCell(7);
    var cell8 = newRow.insertCell(8);
    var cell9 = newRow.insertCell(9);
    var cell10 = newRow.insertCell(10);
   
   

    cell0.innerHTML = fname;
    cell1.innerHTML = lname;
    cell2.innerHTML = fthrname;
    cell3.innerHTML = contact;
    cell4.innerHTML = email;
    cell5.innerHTML = address;
    cell6.innerHTML = city;
    cell7.innerHTML = country;
    cell8.innerHTML = course;
    cell9.innerHTML = "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal' data-whatever='@getbootstrap'>Update</button>";
    cell10.innerHTML = "<button id='delete' onclick='dlt(this)'>Delete</button>";

    row++;
    }
    
}
function dlt(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("display").deleteRow(i);  
}
function visible(){
    document.getElementById('hidden').style.cssText = 'visibility: visible';
}
function hide(){
    document.getElementById('hidden').style.cssText = 'visibility: hidden';
}


