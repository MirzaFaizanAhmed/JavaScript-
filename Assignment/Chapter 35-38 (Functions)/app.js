// //1. Write a function that displays current date & time in your browser.

// function dt(){
//     var d = new Date();
//     document.write(d);
// }
// dt();


// // 2. Write a function that takes first & last name and then it greets the user using his full name.

// function greet(){
//     var firstname = prompt("Enter First Name");
//     var lasttname = prompt("Enter Last Name");
//     alert("Welcome " + (firstname+" "+lasttname));
// }
// greet();


// // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function add(result){
//     var v1 = +prompt("Number 1");
//     var v2 = +prompt("Number 2");
//     result = v1+v2;
//     document.write(result);
//     return result;
// }
// add();


// // 4. Calculator:
// // Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return andshow the desired result in your browser.

// function cal(num1,op,num2){
//     num1 = +prompt("Entre 1st number");
//     op = prompt("Entre Operator");
//     num2 = +prompt("Entre 2nd number");
//     if(op==="+"){
//         document.write("Addition of " + num1 + " & " + num2 + " is: " +(num1+num2));
//     }
//     else if(op==="-"){
//         document.write("Substraction of " + num1 + " & " + num2 + " is: " +(num1-num2));
//     }
//     else if(op==="*"){
//         document.write("Multiplication of " + num1 + " & " + num2 + " is: " +(num1*num2));
//     }
//     else if(op==="/"){
//         document.write("Division of " + num1 + " & " + num2 + " is: " +(num1/num2));
//     }
//     else if(op==="%"){
//         document.write("Remainder of " + num1 + " & " + num2 + " is: " +(num1%num2));
//     }
// }
// cal();


// function sq(num){
//     num = +prompt("Enter number");
//     document.write("Number: "+num + " <br> Square: " + (num**2));
// }
// sq();


// // 6. Write a function that computes factorial of a number.

// function factorial(n){
//     n=+prompt("Enter a number to find its factorial");
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       document.write("The factorial of " + n + " is " + answer);
//       return answer;
//     }  
//   }
// factorial();
 


// // 7. Write a function that take start and end number as inputs & display counting in your browser.

// function coun(){
//     var start = +prompt("Entre number from to start counting");
//     var end = +prompt("Entre number to end counting");
//     for(var i=start ; i<=end ; i++){
//         document.write(i + "<br>");
//     }
// }
// coun();


// // 8. Write a nested function that computes hypotenuse of a right angle triangle.
// // Hypotenuse2 = Base2 + Perpendicular2

// function hypo(){
//     var base = +prompt("Enter Base");
//     var per = +prompt("Enter Perpendicular");
//     var h = base + per;
//     document.write("Hypotenuse without square: "+h+" <br>")

//     function  sqr(){
//         var sqr = h**2
//         document.write("Hypotenuse with square: "+sqr);
//     }
//     sqr();
// }
// hypo();


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function area(width,height){
//     var result = width * height ;
//     document.write(result);
// }

// area(2,4);



// // 10. Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palin(word){
//     var len = word.length;
//     var m = Math.floor(len/2);

//     for(var i=0 ; i < m ; i++){
//         if (word[i]!== word[len -1 -i]){
//             alert("Not a Palindrome Word")
//         }
//         else{
//             alert("Its a Palindrome Word");
//         }
//         break;
//     }
// }
// palin(word = prompt("Entre a word to find its palindrome"));


// // 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// // string in upper case.
// // EXAMPLE STRING : 'the quick brown fox'
// // EXPECTED OUTPUT : 'The Quick Brown Fox'

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  }
 
//  document.write(titleCase("the quick brown fox"));


// // 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// // EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development'

// function find_longest(para)
// {
//   var para1 = para.match(/\w[a-z]{0,}/gi);
//   var result = para1[0];

//   for(var x = 1 ; x < para1.length ; x++)
//   {
//     if(result.length < para1[x].length)
//     {
//     result = para1[x];
//     } 
//   }
//   return result;
// }

// document.write(find_longest('Web Development Tutorial'));


// // 14. The Geometrizer
// // Create 2 functions that calculate properties of a circle, using
// // the definitions here.
// // Create a function called calcCircumference:
// // • Pass the radius to the function.
// // • Calculate the circumference based on the radius, and output
// // "The circumference is NN".
// // Create a function called calcArea:
// // • Pass the radius to the function.
// // • Calculate the area based on the radius, and output "The area
// // is NN".
// // Circumference of circle = 2πr
// // Area of circle = πr2

// function calcCircumference(r){
//     var circumference =2*3.142*r;
//     return circumference;
// }
// function calcArea(r){
//     var area = 3.142*r**2;
//     return area;
// }
// document.write("Circumference of circle is: "+calcCircumference(+prompt("Entre radius")));
// document.write("<br>Area of circle is: "+calcArea(+prompt("Entre radius")));

  

