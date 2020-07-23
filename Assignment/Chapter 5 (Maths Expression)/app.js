// //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// //2. Repeat task1 for subtraction, multiplication, division & modulus.
// var v1 = 20 ;
// var v2 = 12 ;
// var add = v1+v2 , sub = v1-v2 , mul = v1*v2 , div = v1/v2 , mod = v1%v2 ; 
// document.write("Addition : " + add + "<br>");
// document.write("Subtraction : " + sub + "<br>" );
// document.write("Multiplication : " + mul + "<br>" );
// document.write("Division : " + div + "<br>" );
// document.write("Modulus : " + mod );



// // 3. Do the following using JS Mathematic Expressions
// // a. Declare a variable.
// // b. Show the value of variable in your browser like “Value
// // after variable declaration is: ??”.
// // c. Initialize the variable with some number.
// // d. Show the value of variable in your browser like “Initial
// // value: 5”.
// // e. Increment the variable.
// // f. Show the value of variable in your browser like “Value
// // after increment is: 6”.
// // g. Add 7 to the variable.
// // h. Show the value of variable in your browser like “Value
// // after addition is: 13”.
// // i. Decrement the variable.
// // j. Show the value of variable in your browser like “Value
// // after decrement is: 12”.
// // k. Show the remainder after dividing the variable’s value
// // by 3.
// // l. Output : “The remainder is : 0”.

// var v1 ;
// document.write("Value after variable declaration is " + v1 + "<br>");
// v1=5;
// document.write("Initial value: " + v1 + "<br>");
// v1 = v1+1;
// document.write("Value after increment is: " + v1 + "<br>");
// v1 = v1+7;
// document.write("Value after addition is: " + v1 + "<br>");
// v1 = v1-1;
// document.write("Value after decrement is: " + v1 + "<br>");
// v1 = v1%3;
// document.write("The remainder is: " + v1 + "<br>");




// //4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var ticket = 600;
// document.write("Total cost to buy 5 tickets to a movie is " + ticket*5 + "PKR");


// //5. Write a script to display multiplication table of any number in your browser. E.g
// document.write("<h3>Table of 4</h3> <br>");
// for(var i=1 ; i<=10 ; i++ ){
//     document.write("4 X " + i + " = " + 4*i + "<br>" );
// }




// // 6. The Temperature Converter: It’s hot out! Let’s make a
// // converter based on the steps here.
// // a. Store a Celsius temperature into a variable.
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// // c. Now store a Fahrenheit temperature into a variable.
// // d. Convert it to Celsius & output “NNoF is NNoC”.

// var c = 25;
// var f = 70;

// var calc = (f-32)*5/9;
// var far = (c*9/5)+32;
// document.write(c + "F is " + far +"C" + "<br>");
// document.write(f + "C is " + calc +"F");




// //7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
 
// var item1 = 650 , item2 = 100 , q1 = 3 , q2 = 7 , ship = 100;
// document.write("Price of item 1 is " +item1+ "<br>" );
// document.write("Quantity of item 1 is " +q1+ "<br>" );
// document.write("Price of item 2 is " +item2+ "<br>" );
// document.write("Quantity of item 2 is " +q2+ "<br>" );
// document.write("Shipping Charges " +ship+ "<br><br>" );
// document.write("Total cost of your order is " + ((item1*q1)+(item2*q2)+100) );



// //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// var mo = 804;
// var tm = 980;
// var per = mo*100/tm ; 
// document.write("Total Marks: " +tm+ "<br>");
// document.write("Marks Obtained: " +mo+ "<br>");
// document.write("Percentage: "+per+ "%" + "<br>");





// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// // script to convert the total currency to Pakistani Rupees.
// // Perform all calculations in a single expression.
// // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// // and 1 Saudi Riyal = 28 Pakistani Rupee)

// var dollars = 104.82;
// var riya = 28;
//  document.write("<h2>Currency in PKR</h2><brbr>");
//  document.write("Total currency in PKR: " + ((104.28*10)+(28*25))); 



// // 10. Write a program to initialize a variable with some
// // number and do arithmetic in following sequence:
// // a. Add 5
// // b. Multiply by 10
// // c. Divide the result by 2
// // Perform all calculations in a single expression

// var x = 3;
// x=x+5;
// x=x*10;
// x=x/2;
// document.write(x);



// // 11. The Age Calculator: Forgot how old someone is?
// // Calculate it!
// // a. Store the current year in a variable.
// // b. Store their birth year in a variable.
// // c. Calculate their 2 possible ages based on the stored
// // values.

// var cy = 2020;
// var by = 1997;
// var age = cy - by ;
// document.write("<h2>Age Calculator</h2><br><br>");
// document.write("Current Year: "+cy+"<br>");
// document.write("Birth Year: "+by+"<br>");
// document.write("Your Age: "+age+"<br>");



// // 12. The Geometrizer: Calculate properties of a circle.
// // a. Store a radius into a variable.
// // MATH EXPRESSION
// // b. Calculate the circumference based on the radius, and
// // output “The circumference is NN”.
// // (Hint : Circumference of a circle = 2 π r , π = 3.142)
// // Calculate the area based on the radius, and output “The
// // area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// document.write("<h2>The Geometerizer</h2><br><br>");
// var radius = 20;
// var cir = 2*3.142*20;
// var area = 3.142*20**2;
// document.write("Radius of circle: " + 20 + "<br>");
// document.write("The Circumference is: " + cir + "<br>");
// document.write("The Areaa is: " + area + "<br>"); 




// // 13. The Lifetime Supply Calculator: Ever wonder how
// // much a “lifetime supply” of your favorite snack is?
// // Wonder no more.
// // a. Store your favorite snack into a variable
// // b. Store your current age into a variable.
// // c. Store a maximum age into a variable.
// // d. Store an estimated amount per day (as a number).
// // e. Calculate how many would you eat total for the rest of
// // your life.
// // Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”.

// document.write("<h2>The Lifetime Supply Calculator</h2><br><br>");
// var snack = "Chocolate Chip";
// var c_age = 15;
// var e_age = 65;
// var s_p_d = 3;
// document.write("Favourite Snack: " + snack + "<br>");
// document.write("Current Age: " + c_age + "<br>");
// document.write("Estimate Maximum Age: " + e_age + "<br>");
// document.write("Amount of Snack PerDay: " + s_p_d + "<br>");
// document.write("You will need " + c_age*s_p_d +" "+ snack + "to last you until the ripe old age of " + e_age + "<br>");