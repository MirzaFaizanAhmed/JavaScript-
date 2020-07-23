// // 1. Write a program that displays current date and time in your browser

// var d = new Date();
// document.write(d);


// // 2. Write a program that alerts the current month in words. For example December.

// var d = new Date();
// mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var n = mlist[d.getMonth()];
// document.write("Current Month: "+n);


// // 3. Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will showSun.

// var d = new Date();
// var dlist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var n = dlist[d.getDay()];
// document.write("Current Day: "+n);


// // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var d = new Date();
// var dlist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var n = dlist[d.getDay()];
// if(n==="Saturday" || n==="Sunday"){
//     document.write("It's Fun day");
// }
// else {
//     document.write("It's not a Fun day , get's back to work");
// }


// // 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// // else shows “Last days of the month”.

// var d = new Date();
// var n = d.getDate();
// if(n <  15){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }


// // 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// // hasn't been declared beforehand. Use any variable you like to represent the Date object

// var pastdate =new Date( prompt("Enter a date with time"));
// var pasttime = pastdate.getTime();
// var todaydate = new Date();
// var todaytime = todaydate.getTime();
// var millisec = todaytime + pasttime/1000;
// var minutes = millisec/60*60;
// document.write("Past Date : "+pastdate +"<br>");
// document.write("Current Date : "+todaydate +"<br>");
// document.write("Elapsed MilliSecond since "+pastdate+" : " +millisec +"<br>");
// document.write("Elapsed Minutes since "+pastdate+" : "+minutes +"<br>");


// // 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

// var hours = new Date().getHours();
// var hours = (hours+24-2)%24;
// var mid='AM';
// if(hours==0){ 
// hours=12;
// }
// else if(hours>12)
// {
// hours=hours%12;
// mid='PM';
// }
// alert ("It's " +mid);


// // 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named
// // laterDate.

// var d = new Date();
// var laterDate = new Date(d.getFullYear(),d.getMonth()+1,0);
// document.write("Later Date: "+laterDate);


// // 9. Create a date object of the starting date of this Ramadanand alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var date1 = new Date("June 18, 2015"); 
// var date2 = new Date(); 
// var diff = date2.getTime() - date1.getTime(); 
// var diff = diff / (1000 * 3600 * 24); 
// diff = Math.floor(diff);
// document.write(diff + " days has passed since 1rt Ramzan, 2015");


// // 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var date1 = new Date("Jan 01, 2015");
// var date2 = new Date();
// var diff = date2.getTime() - date1.getTime();
// var sec = Math.floor(diff / 1000*60) ;
// document.write("On reference date: "+date2 +" "+sec +" seconds has passed since begnning of 2015");


// // 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// // finally display the date object in your browser.

// var date = new Date();
// document.write(date);
// var dat1 = date.setHours(date.getHours()+1);
// dat1 =Math.floor(dat1/1000*60*60*24);

// document.write("<br>"+dat1);


// // 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var d = new Date();
// var pd = new Date();
// var py = pd.getFullYear() - 100;
// pd.setFullYear(py);
// document.write("Current date: "+d+"<br> 100 year back, it was "+pd);


// // 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// var age  = prompt("Enter your age");
// var d = new Date();
// var year =d.getFullYear()-age;
// document.write("Your age: "+age +"<br> Your birth year is: "+ year);


// // 14. Write a program to generate your K-Electric bill in your
// // browser. All the amounts should be rounded off to 2
// // decimal places. Display the following fields:
// // a. Customer Name
// // b. Current Month
// // c. Number of units
// // d. Charges per unit
// // e. Net Amount Payable (within Due Date)
// // f. Late Payment Surcharge
// // g. Gross Amount Payable (after Due Date)
// // Where,
// // Net Amount Payable (within Due Date) = Number of units * Charges per unit
// // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// document.write("<h1>K-Electric Bill</h1><br>");
// var cn = prompt("Enter Cutomer name");
// var d = new Date();
// var cm =d.getMonth();
// var unit = prompt("Enter number of units");
// var charges = 15;
// var late = 400;

// var calnetAmount = unit * 15;
// var callateAmount = calnetAmount + late;

// document.write("Customer Name: "+ cn +"<br>");
// document.write("Month: "+ cm +"<br>");
// document.write("Number of Unit: "+ unit +"<br>");
// document.write("Charge per Unit: "+ charges +"<br><br>");
// document.write("Net Amount Payable (within Due Date): "+ calnetAmount +"<br>");
// document.write("Late Payment Charges: "+ late +"<br>");
// document.write("Gross Amount Payable (after Due Date): "+ callateAmount +"<br>");
