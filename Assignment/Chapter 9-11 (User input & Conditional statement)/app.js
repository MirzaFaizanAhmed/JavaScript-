// // 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var name = prompt("Entre City Name");
// if(name==="karachi"){
//     alert("Welcome to city of lights");
// }



// // 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
// var gender = prompt("Enter your gender");
// if(gender==="male"){
//     alert("Good Morning Sir");
// }
// else if(gender==="female"){
//     alert("Good Morning Ma'am");
// }




// // 3. Write a program to take input color of road traffic signal from the user & show the message according to this tab
// var color = prompt("Enter a color");
// if (color==="red"){
//     alert("Must Stop");
// }
// else if (color==="yellow"){
//     alert("Ready to Move");
// }
// else if (color==="green"){
//     alert("Move Now");
// }



// // 4. Write a program to take input remaining fuel in car (inlitres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("Enter remaining feul");
// if(fuel < 0.25){
//     alert("Your fuel is " + fuel + " Please refill the fuel in your car");
// }
// else{
//     alert("You have enough fuel");
// }



// //5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }




// // 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute grade as per following table:

// var om = +prompt("Enter Obtained Marks");
// var tm = +prompt("Entre Total Marks");
// var per = om*100/tm;
// document.write("Total Marks : " + tm + "<br>");
// document.write("Marks Obtained : " + om + "<br>");
// document.write("Percentage : " + per + "<br>");
// if(per >=80){
//     document.write("Grade : A-one" +"<br>")
//     document.write("Remarks : Excellent" + "<br>")
// }
// else if(per >=70){
//     document.write("Grade : A" +"<br>")
//     document.write("Remarks : Good" + "<br>")
// }
// else if(per >=60){
//     document.write("Grade : B" +"<br>")
//     document.write("Remarks : You Need To Improve" + "<br>")
// }
// else if(per < 60){
//     document.write("Grade : Fail" +"<br>")
//     document.write("Remarks : Sorry" + "<br>")
// }




// // 7. Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable.
// // Prompt user to guess the secret number.
// // a. If user guesses the same number, show “Bingo! Correct
// // answer”.
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.

// var num = +prompt("Guess a Number between 1 - 10");
// var snum = 7 ; 

// if (num === snum){
//     alert("Bingo!");
// }
// else if(snum === num+1 || snum === num-1){
//     alert("Close enough to the correct answer");
// }
// else{
// alert("Game Over!")};





// // 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// // is divisible by 3.

// var num = +prompt("Entre a Number");
// if(num%3==0){
//     alert("Number is Divisible by 3");
// }
// else{
//     alert("Number is Not Divisible by 3");
// }



// //9. Write a program that checks whether the given input is an even number or an odd number.
// var num = +prompt("Enter a number to check Even or Odd");

// if(num%2==0){
//     alert("Given Nunber is Even");
// }
// else{
//     alert("Given Number is Odd");
// }




// // 10. Write a program that takes temperature as input and shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = +prompt("Enter a Temperature");
// if(temp > 40){
//     alert("It is too hot outside.");
// }
// else if(temp > 30){
//     alert("The Weather today is Normal.");
// } 
// else if(temp > 20){
//     alert("Todays Weather is cool.");
// } 
// else if(temp > 10){
//     alert("OMG! Todays weather is so Cool.");
// } 





// // 11. Write a program to create a calculator for +,-,*, / & %
// // using if statements. Take the following input:
// // a. First number
// // b. Second number
// // c. Operation (+, -, *, /, %)
// // Compute & show the calculated result to user.

// var num1 = +prompt("First Nunber");
// var num2 = +prompt("Second Nunber");
// var operator = prompt("Operator");

// if(operator==="+"){
//     alert("Result: " + (num1+num2));
// }
// else if(operator==="-"){
//     alert("Result: " + (num1-num2));
// }
// else if(operator==="*"){
//     alert("Result: " + (num1*num2));
// }
// else if(operator==="/"){
//     alert("Result: " + (num1/num2));
// }
// else if(operator==="%"){
//     alert("Result: " + (num1%num2));
// }





