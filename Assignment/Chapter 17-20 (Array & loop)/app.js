// //1. Declare and initialize an empty multidimensional array

// var arr = [[],[],[],[]];


// //2. Declare and initialize a multidimensional array representing the following matrix:

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];



// //3. Write a program to print numeric counting from 1 to 10.
// for (var i=1 ; i<=10 ; i++){
//     document.write(i +"<br>");
// }


// // 4. Write a program to print multiplication table of any number using for loop. Table number & length should be
// // taken as an input from user.

// var table = +prompt("Entre a number to show its multiplication table");
// var l = +prompt("Enter lenght of multiplication table");
// document.write("Multiplication table of "+table+ " lenght "+ l +"<br>");
// for(var a=1 ; a<=l ; a++){
//     document.write(table + " X " + a + " =" + (table*a)+"<br>");
// }





// // 5. Write a program to print items of the following array using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple" , "banana" , "mango" , "orange", "strawberry"];
// for(var i=0 ; i<=4 ; i++){
//     document.write(fruits[i]+"<br>")
// }

// document.write("<br><br>");

// var fruits = ["apple" , "banana" , "mango" , "orange", "strawberry"];
// for(var b=0 ; b<=4 ; b++){
//     document.write("Element at Index " + b +" is " + fruits[b] + "<br>");
// }




// // 6. Generate the following series in your browser. See example output.
// // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h4>Counting:</h4>");
// for (var a=1 ; a<=15 ; a++){
//     document.write(a + " , ");   
// }
// document.write("<br><br>");


// document.write("<h4>Reverse counting:</h4>");
// for (var b=10 ; b>=1 ; b--){
//     document.write(b + " , ");   
// }
// document.write("<br><br>");


// document.write("<h4>Even Number:</h4>");
// for (var c=0 ; c<=20 ; c++){
//     if(c%2==0){
//     document.write(c + " , ");
//     }   
// }
// document.write("<br><br>");


// document.write("<h4>Odd Number:</h4>");
// for (var d=0 ; d<=20 ; d++){
//     if(d%2!==0){
//     document.write(d + " , ");
//     }   
// }
// document.write("<br><br>");


// document.write("<h4>Series:</h4>");
// for (var e=2 ; e<=20 ; e=e+2){
//     document.write(e + "k , ");  
// }
// document.write("<br><br>");






// // 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// // Write a program to enable “search by user input” in an
// // array.
// // After searching, prompt the user whether the given item is
// // found in the list or not

// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bake = prompt("Welcome to ABC Bakery. What do you wanty to order Sir/Ma'am");
// var bake1 =bake.toLowerCase();
// var bake2 =bake.toUpperCase();

// for(var i=0 ; i<=4 ; i++){
// if(item[i]===bake1 || item==bake2){
//     document.write("Cookie is available at Index " + i + " in our bakery");
// }
// else{
//     document.write("We are sorry Cookie is not available in our bakery");
//     break;
// }
// }




// // // 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]

// var arr = [24,53,78,91,12];

// var max = 0;
// var n = arr.lenght-1;
//  for(var i=0 ; i<=n;i++){
//      if(arr[i] > max){
//          max = arr[i];
//      }
//  }
// document.write("Array Elemnent: <br>"+arr + "<br>");
// document.write("The Largest Nunber is " + max);




// // // 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

// var arr = [24,53,78,91,12];

// var min = 0;
// var n = arr.lenght-1;
//  for(var i=0 ; i<=n;i++){
//      if(arr[i] < min){
//          min = arr[i];
//      }
//  }
// document.write("Array Elemnent: <br>"+arr + "<br>");
// document.write("The Smallest Nunber is " + min);
 




// // 10. Write a program to print multiples of 5 ranging 1 to 100.

// for( var a=5 ; a<=100 ; a=a+5){
//     document.write(a + " ,");
// }
