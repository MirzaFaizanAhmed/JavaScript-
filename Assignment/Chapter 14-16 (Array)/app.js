// // 1. Declare an empty array using JS literal notation to store student names in future

// var arr = [];


// // 2. Declare an empty array using JS object notation to store student names in future

// var arr = new Array()



// //3. Declare and initialize a strings array.

// var arrs = ["danial" , "Ahmed" , "Bilal"];



// //4. Declare and initialize a numbers array.

// var arrn = [4,6,7,8,4];



// //5. Declare and initialize a boolean array.

// var arrb = [true,false];




// //6. Declare and initialize a mixed array.
// var arrm = ["Ahmed","21",true];



// // 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// // BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser 

// var qua = ["SSC","HSC","BCS","BCOM","MS","M.PHIL","PHD"]
// document.write("<h2>Qualifications</h2><br>");
// for (i=0 ; i<=6 ; i++){
//     document.write(i + ")  " +qua[i] + "<br>");
// }




// // 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// // Assume that total marks are 500 for each student, display the scores & percentages of students like

// var student = ["Ahmed","Danial","Bilal"];
// var score = [340,321,290];
// var per = [340*100/500,321*100/500,290*100/500];

// document.write("Score of Ahmed is " + score[0] + ". Percentage: " + per[0] + "%<br>");
// document.write("Score of Danial is " + score[1] + ". Percentage: " + per[1] + "%<br>");
// document.write("Score of Bilal is " + score[2] + ". Percentage: " + per[2] + "%");



// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.


// var color = ["red","yellow","green"];
// document.write("Array: " + color + "<br>" );
// color.unshift(prompt("Adding Element to the Beginning"));
// document.write("Array after adding element to tha beginning: "+ color + "<br>");
// color.push(prompt("Adding Element to the last"));
// document.write("Array after adding element to tha last: "+ color + "<br>");
// color.unshift(prompt("Adding 1st Element to the Beginning"));
// color.unshift(prompt("Adding 2nd Element to the Beginning"));
// document.write("Array after adding 2 elements to tha beginning: "+ color + "<br>");
// color.shift();
// document.write("Array after deleting element to tha beginning: "+ color + "<br>");
// color.pop();
// document.write("Array after deleting element to tha last: "+ color + "<br>");
// color.splice(1,+prompt("Enter a position where you add a value"),prompt("Enter a value to add after slice"));
// document.write("Array after adding element to tha choice index: "+ color + "<br>");
// color.splice(+prompt("Entre an index from to delete color"),+prompt("Entre an index to to delete color"));
// document.write("Array after deleting element to tha choices index: "+ color + "<br>");





// // 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method

// var arry = [320,230,480,120];
// document.write("Scores of students: "+arry+"<br>");
// arry.sort();
// document.write("Order Score of students: "+arry);



// // 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

// var cities = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"];
// document.write("Cities List: <br>" + cities + "<br>");
// var copy = cities.slice(1,3);
// document.write("Selected cities list: <br>"+copy);




// // 12. Write a program to create a single string from the below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// var arr = ["This","is","my","car"];
// document.write("Array: <br>"+arr+"<br>")
// document.write("String: <br>")
// for(var i=0 ; i <=3 ; i++){
//     document.write(arr[i]+" ")
// }




// // 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var comp = ["keyboard","mouse","printer","monitor"];
// for (var i=0 ; i<=3 ; i++){   
//     document.write("out : <br>"+comp[i]+"<br>");
// }




// // 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)

// var comp = ["keyboard","mouse","printer","monitor"];
// for (var i = comp.length - 1; i >= 0; i--){
//     document.write("out: <br>" + comp[i]+"<br>");
// }




// // 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
// //     Display the following dropdown/select menu in your browser using document.write() method:


// var phone = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"]
// document.write("<h1>Phone Manufactures</h2><br><br>")
// for(var i=0 ; i<=5 ; i++){
//     document.write(phone[i]+"<br>");
// }