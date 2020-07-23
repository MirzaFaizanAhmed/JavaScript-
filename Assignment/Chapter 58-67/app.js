// i. Get element of id “main-content” and assign them in a variable.

var main_content = document.getElementById('main-content');


// ii. Display all child elements of “main-content” element.

var first = document.getElementById('main-content');
console.log(first.childNodes[0],first.childNodes[1],first.childNodes[2],first.childNodes[3],first.childNodes[4],first.childNodes[5]);

// iii. Get all elements of class “render” and show their innerHTML in browser/

var a = document.getElementsByClassName("render");
document.write(a[0].innerHTML,"<br>")
document.write(a[1].innerHTML,"<br>")
document.write(a[2].innerHTML,"<br>")
document.write(a[3].innerHTML,"<br>")
document.write(a[4].innerHTML,"<br>")

// iv. Fill input value whose element id first-name using javascript
//v. Repeat part iv for id ”last-name” and “email”.

var firstname = document.getElementById('first-name');
console.log(firstname.value = 'Mirza Faizan');

var lastname = document.getElementById('last-name');
console.log(lastname.value = 'Ahmed');

var email = document.getElementById('email');
console.log(email.value = 'xyz@gmail.com');


// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

var form_content = document.getElementById('form-content').nodeType;
console.log(form_content);

// ii. Show node type of element having id “lastName” and its child node.

var b = document.getElementById('lastName');
console.log(b.nodeType);
console.log(b.childNodes);

// iv. Get First and last child of id “main-content”

var get = document.getElementById('main-content');
console.log(get.firstChild);
console.log(get.lastChild);

// v. Get next and previous siblings of id “lastName”
 var siblings = document.getElementById('lastName');
 console.log(siblings.nextSibling);
 console.log(siblings.previousSibling);


//  vi. Get parent node and node type of element having id “email”

var prnt = document.getElementById('email');
console.log(prnt.parentNode);
console.log(prnt.nodeType);

