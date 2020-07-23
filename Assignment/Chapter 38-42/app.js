// // 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(a,b){
//     result = a**b;
//     document.write("The power of Given Number is : ",result);
// }
// power(prompt('Entre the Number to get power of this number'),prompt('Entre tha power'));


// // 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// function leapYear(year){
//     var leap = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

//     if(leap ==  true ){
//         document.write(year , " : is leap year ");
//     }
//     else{
//         document.write(year , " : not a leap year");
//     }
    
// }
// leapYear(+prompt("Entre Year"));



// // 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// // area = S(S − a)(S − b)(S − c)
// // where, S = ( a + b + c ) / 2

// var a = +prompt("Enter a");
// var b = +prompt("Enter b");
// var c = +prompt("Enter c");

// function findS(){
//     s = (a+b+c)/2;
//     return s;
// }
// function findArea(){
//     var area = s*(s-a)*(s-b)*(s-c);
//     document.write("Area of triangle is : ",area);
//     return area;
// }
// findS();
// findArea();



// // 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// // marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions
// // from mainFunction and display result in mainFunction.


// var eng = +prompt("Enter English Marks");
// var mat = +prompt("Enter Maths Marks");
// var sci = +prompt("Enter Science Marks");

// function average(){
//     total = eng+mat+sci;
//     document.write("Average : ",total)
//     return total;
// }
// function percentage(){
//     per = total *100/300;
//     document.write("Percentage : ",per);
//     return per;
// }
// function main(){
//     average();
//     percentage();
// }




// // 5. You have learned the function indexOf. Code your own customfunction that will perform the same functionality. You can code
// // for single character as of now.

// function findindex(word,char){
//     document.write("Index of " , char , " : ", word.indexOf(char));
// }
// findindex(prompt("Enter Word"),prompt("Enter Character"));


// // 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long

// function deletvowel(str){
// if(str.length > 25){
//     alert("Sentence must have 25 character");
// }
//  string = str.replace( /[aeiou]/g, '' );
//  document.write(string);
// }
// deletvowel(prompt("Entre sentence"));



// // 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this
// // distance in meters, feet, inches and centimeters.

// var dst = prompt("Enter Distance in kilometer");

// function meter(){
//     document.write("Distance in meter: ",dst * 1000 , "<br>");   
// }
// function feet(){
//     document.write("Distance in feet: ",dst * 3280.84 , "<br>");   
// }
// function inches(){
//     document.write("Distance in inches: ",dst * 39370.1 , "<br>");   
// }
// function centimeters(){
//     document.write("Distance in centemeter: ",dst * 100000 , "<br>");   
// }
// meter();feet();inches();centimeters();



// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the
// withdrawer

function currency(amount){
    document.write("You have " , Math.floor(amount/1000) ," Thousand notes ");
    document.write(Math.floor((amount % 1000)/500) ," Fivehundreds notes ");
    document.write(Math.floor(((amount % 1000)% 500)/100) ," Hundred notes ");
    document.write(Math.floor((((amount % 1000)% 500)%100)/50) ," Fifty notes ");
    document.write(Math.floor(((((amount % 1000)% 500)%100)%50)/20) ," Twenty notes ");
    document.write(Math.floor((((((amount % 1000)% 500)%100)%50)%20)/10) ," Ten notes");
}
currency(prompt("Enter Amount"));

