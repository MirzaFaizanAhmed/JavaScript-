// // 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a=10;
// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br><br>");
// document.write("--------------------------------<br><br><br>");
// a=++a;
// document.write("The value ++a is: " + a + "<br>");
// document.write("The value of a is: " + a + "<br><br><br><br>");

// document.write("The value a++ is: " + a + "<br>");
// a=a+1;
// document.write("The value of a is: " + a + "<br><br><br><br>");
// a=--a;
// document.write("The value --a is: " + a + "<br>");
// document.write("The value of a is: " + a + "<br><br><br><br>");

// document.write("The value a-- is: " + a + "<br>");
// a=a-1;
// document.write("The value of a is: " + a + "<br><br><br><br>");



// // 2. What will be the output in variables a, b & result after
// // execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;  Ans: decrement by 1 output : 1
// // --a - --b;  Ans: decrement in a by 1 and in b by 1 Output : 0
// // --a - --b + ++b;  Ans: Output: 0
// // --a - --b + ++b + b--; And: Output: 0

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a +"<br>");
// document.write("b is: " + b +"<br>");
// document.write("Result is: "+ result);



// // 3. Write a program that takes input a name from user & greet the user.

// var name = prompt("Enter Your Full Name");
// alert("Hello " + name + " Nice to meet you");



// // 5. Write a program to take input a number from user &
// // display it’s multiplication table on your browser. If user
// // does not enter a new number, multiplication table of 5
// // should be displayed by default.

// var num= +prompt("Entre a number to display theri mukltiplication table");
// document.write("<h2>Multiplication Table</h2><br><br>")
// document.write("You Entred Number: " + num + "<br><br>");
// for(var a=1 ; a<=10 ; a++){
//     document.write(num + " X " + a + " = " + a*num + "<br>");
// }
// if (num==""){
//     for(var a=1 ; a<=10 ; a++){
//         document.write(5 + " X " + a + " = " + a*5 + "<br>");
//     }
// }





// // 6. Take
// // a) Take three subjects name from user and store them in 3
// // different variables.
// // b) Total marks for each subject is 100, store it in another
// // variable.
// // c) Take obtained marks for first subject from user and
// // stored it in different variable.
// // d) Take obtained marks for remaining 2 subjects from user
// // and store them in variables.
// // e) Now calculate total marks and percentage and show the
// // result in browser like this.(Hint: user table)

// var sub1 = prompt("Enter subject 1");
// var sub2 = prompt("Enter subject 2");
// var sub3 = prompt("Enter subject 3");

// var total = 100;

// var m1=+prompt("Enter marks of : " +sub1);
// var m2=+prompt("Enter marks of : " +sub2);
// var m3=+prompt("Enter marks of : " +sub3);


// var per1=m1*100/total;
// var per2=m2*100/total;
// var per3=m3*100/total;

// totalc = total*3;
// om = m1+m2+m3;
// perc = (per1+per2+per3)*100/300;


// document.write("<h4>Subject      Total marks      Obtained marks      Percentage</h4><br><br>");
// document.write(sub1+"             "+total+"            "+m1+"            "+per1 +"%<br>");
// document.write(sub2+"             "+total+"            "+m2+"            "+per2 +"%<br>");
// document.write(sub3+"             "+total+"            "+m3+"            "+per3 +"%<br>");
// document.write("                    "+totalc +"            "+om+"                 "+perc);


