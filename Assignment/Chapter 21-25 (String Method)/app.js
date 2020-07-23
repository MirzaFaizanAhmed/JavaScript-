// // 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// // titled fullName. Greet the user using his full name.

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Entre your last name");
// var fullname = firstname + " " +lastname ; 
// alert("Welcome " + fullname);


// // 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
// // input in your browser

// var model = prompt("Enter Mobile Model Number");
// var lenght = model.length;
// document.write("My favouite phone is: " + model +" <br> " + "Lenght of String: "+lenght );


// //3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// var p = "pakistani" ;
// var ind = p.indexOf("n");
// document.write("String: " + p + "<br>" + "Index of 'n': " +ind);


// //4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

// var l = "Hello World";
// var ind = l.lastIndexOf("l");
// document.write("String: " + l + "<br>" + "Last Index of 'l': " +ind);


// //5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var char = "Pakistani";
// var find = char.charAt(3);
// document.write("String: " + char + "<br>" + "Character at index 3: " +find)


// //6. Repeat Q1 using string concat() method.

// var firstname = prompt("Enter your first name");
// var lastname = prompt("Entre your last name");
// var fullname = firstname.concat(" "+lastname);
// alert("Welcome " + fullname);


// //7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hydrabad";
// var rp = city.replace("Hydra","Islam");
// document.write("City: "+city+"<br>"+"After Replacement: "+rp);


// // 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rp = message.replace(/and/g,"&");
// document.write(rp);


// // 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var s =  "472";
// var n = Number(s);
// document.write("Value: "+s + "<br>" + "Type: "+typeof(s) + "<br>" + "Value: "+n + "<br>" + "Type: "+typeof(n));


// // 10. Write a program that takes user input. Convert and show the input in capital letters.

// var word = prompt("Enter a word");
// var chng = word.toUpperCase();
// document.write("User Input: "+word + "<br>" + "Uper case: "+chng);


// //11. Write a program that takes user input. Convert and show the input in title case.

// var word = prompt("Enter a word");
// var chng = word.slice(0,1);
// var chng1 = word.slice(1);
// var chng0 = chng.toUpperCase();
// document.write("User Input: "+word + "<br>" + "Title case: "+(chng0+chng1));


// // 12. Write a program that converts the variable num to string.var num = 35.36 ;Remove the dot to display “3536” display in your browser

// var num = 35.36;
// var s = num.toString();
// var rp = s.replace(".","");
// document.write("Number: "+num + "<br>" + "String: "+rp);


// // 13. Write a program to take user input and store usernamein a variable. If the username contains any special symbol
// // among [@ . , !], prompt the user to enter a valid username.For character codes of [@ 

// var user = prompt("Enter User Name");
// for(var i=0 ; i<=user.length ; i++){
//     if(user[i]==="!" || user[i]==="," || user[i]==="." || user[i]==="@"){
//         alert("Please enter a valid username");
//     }
// }


// // 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an
// // array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user
// // enters cookie, Cookie, COOKIE or coOkIE, programshould inform about its availability. Example:

// var a = ["cake","apple pie","cookie","chips","patties"];
// var b = prompt("Welcome to XYZ Bakery, What do you want to order Sir/Ma'am");
// for (var i=0 ; i<=a.length ; i++){
//     if(a[i]===b){
//         document.write("Cookie is available at Index "+ i +" in our Bakery");
//     }else{
//         document.write("We are sorry. pastry is not available in our Bakery");
//     }break;
// }


// // 15. Write a program to take password as an input fromuser. The password must qualify these requirements:
// // a. It should contain alphabets and numbers
// // b. It should not start with a number
// // c. It must at least 6 characters long
// // If the password does not meet above requirements,prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII
// // table at the end of this document.

// var pass = prompt("Entre password");
// var pass1 = pass.slice(0,1);
// var pass2 = pass.slice(1);
// if(pass.match(/[A-Z]/) && pass.match(/[a-z]/) && pass.match(/[0-9]/) && pass1.match(/[0-9]/)){
//     document.write("Password is : "+pass );
// }
// else{
//     alert("Password must contain atleast 1upercase 1lowercase and a number and password must start with number");
// }



// // 16. Write a program to convert the following string to an array using string split method.
// // var university = “University of Karachi”; Display the elements of array in your browser.

// var university = "University of Karachi";
// var uni = university.split('');
// for (var i=0 ; i<uni.length ; i++){
//     document.write(uni[i]+"<br>");
// }



// // 17. Write a program to display the last character of a user input.

// var u = prompt("Enter your name");
// var u1 = u.length;
// document.write("User Input: "+u+"<br>"+"Last character of input: "+u.charAt(u1 -1));




// // 18. You have a string “The quick brown fox jumps over theclazy dog”. Write a program to count number of
// // occurrences of word “the” in given string.

// var st = "The quick brown fox jumps over the clazy dog";
// var st1 = st.toLowerCase();
// var occ = st1.match(/the/g).length;
// document.write("Text: "+st + "<br>"+"There are "+occ+" occurence(s) of word 'the'");