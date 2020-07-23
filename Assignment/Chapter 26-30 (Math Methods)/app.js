// // 1. Write a program that takes a positive integer from user & display the following in your browser.
// // a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// var num = +prompt("Enter Floot Integer");
// var rv = Math.round(num);
// var fv = Math.floor(num);
// var cv = Math.ceil(num);
// document.write("Number: "+num+"<br>"+"Round off: "+rv+"<br>"+"Floor value: "+fv+"<br>"+"Ceil value: "+cv);


// // 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// // a. number b. round off value of the number c. floor value of the number d. ceil value of the number

// var num = +prompt("Enter negative floating point number");
// var rv = Math.round(num);
// var fv = Math.floor(num);
// var cv = Math.ceil(num);
// document.write("Number: "+num+"<br>"+"Round off: "+rv+"<br>"+"Floor value: "+fv+"<br>"+"Ceil value: "+cv);



// // 3. Write a program that displays the absolute value of a number

// var num = +prompt("Enter a negative number");
// var num1 = Math.abs(num);
// document.write("The absolute value of "+num+" is "+num1);



// // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var dice = Math.random()*6;
// var dice1 = Math.round(dice);
// document.write("Random dice value is: "+dice1);



// // 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your
// // browser

// var coin = Math.random()*2;
// var coin1 = Math.round(coin);
// if(coin1===2){
//     document.write(coin1 + "<br>random coin value: Heads")
// }
// else if(coin1===1){
//     document.write(coin1 + "<br>random coin value: Tails")
// }



// // 6. Write a program that shows a random number between 1 and 100 in your browser

// var r = Math.random()*100;
// var r1 = Math.round(r);
// document.write("Random number between 1 - 100 : "+r1);



// // 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// // Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// var w = prompt("Enter weight");
// var r = Math.random()*w;
// var n = r.toFixed(1);
// document.write("The Weight of user is: "+ n+ " Kilograms");



// // 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret
// // number, congratulate the user.

// var num = +prompt("Enter a nuber");
// var num1 = Math.random()*10;
// var num2 = Math.round(num1);
// if(num2===num){
//     document.write("Congratultions");
// }
// else{
//     document.write("Try Again!");
// }



