// 1. Create a signup form and display form data in your web page on submission.

var row = 1;
function submission(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById ("contact").value;
    var passwrod = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    if(!name || !email || !contact || !passwrod || !confirm){
        alert('Please fill all the fields');
        return;
    }
    if(passwrod !== confirm){
        alert('Incorrect Password');
    }else{

    var record = document.getElementById("record");

    var newRow = record.insertRow(row);

    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);

    cell0.innerHTML = name;
    cell1.innerHTML = email;
    cell2.innerHTML = contact;
    cell3.innerHTML = passwrod;
    cell4.innerHTML = "<button onclick='dlt(this)'>Delete</button>";

    row++;

    }
    
}
function dlt(r){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("record").deleteRow(i);  
}
