/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 1 to 10

========================*/




//1. Write a JavaScript program to display the current day and time in the following format.

/*
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22
*/

var dateToday = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var hourNow = dateToday.getHours();
var prefix;
if(hourNow<=12){
	prefix = "AM"
}
else{
	prefix = "PM"
}
if(hourNow>12){
	hourNow-=12;
}
var minuteNow = dateToday.getMinutes();
if(minuteNow<10){
	minuteNow = "0"+minuteNow;
}
var secondNow = dateToday.getSeconds();
if(secondNow<10){
	secondNow="0"+secondNow;
}
console.log("Today is: "+days[dateToday.getDay()]);
console.log("Current time is: "+hourNow+":"+minuteNow+":"+secondNow+prefix);

//2. Write a JavaScript program to print the contents of the current window

//whatever page is loaded:
document.body.innerText;


//3.Write a JavaScript program to get the current date.

/*
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/

var dateToday = new Date();
dateToday.toLocaleDateString();

//4.Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

/*
Heron's formula:
A =Area of triangle = sqrt(s*(s-a)*(s-b)*(s-c))
S = Semi-perimeter of triangle = (a+b+c)/2
*/

var a = 5;
var b = 6;
var c = 7;
var s = (a+b+c)/2
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2);
console.log(area+" square units");

//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one 
//letter from the end of the string and attaching it to the front. 

var arr = ["w","3","r","e","s","o","u","r","c","e"];
function rotate(){
	var last = arr[arr.length-1];
	arr.pop();
	arr.unshift(last);
	var str =" "+arr.join("");
	document.body.innerHTML = str;
}
setInterval(rotate,500);

//6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

/*
Test whether a year is a leap year or not 
(from https://support.microsoft.com/en-us/help/214019/method-to-determine-whether-a-year-is-a-leap-year)

    1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    4. The year is a leap year (it has 366 days).
    5. The year is not a leap year (it has 365 days). 
*/

var yr = prompt("Please enter a year");
if(yr%4 == 0){
	if(yr%100 == 0){
		if(yr%400 == 0){
			leap();
		}
		else{
			notLeap();
		}
	}
	else{
		leap();
	}
}
else{
	notLeap();
}
function leap(){
	console.log("The year "+yr+" is a leap year!")
}
function notLeap(){
	console.log("The year "+yr+" is NOT a leap year");
}

//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
/*
Logic:
- create new Date object with argument January 1, 2014
- create successive dates thru a for loop that adds 1 to the full years until the year 2050 (i=0 until i = 36)
- create a variable that is a new date object with the argument January 1 but with the new year
- get the day of that new date, it it is equal to zero then print "january 1,"+yr+" is a sunday"

*/

var date = new Date("Jan 1, 2014");
for(var i=0;i<37;i++){
	var newyr = date.getFullYear()+i;
	var newdate = new Date("Jan 1,"+newyr);
	if(newdate.getDay() == 0){
		console.log("January 1, "+newyr+" is a Sunday");
	}
}

//8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user 
//is then prompted to input a guess number. If the user input matches with guess number, the program 
//will display a message "Good Work" otherwise display a message "Not matched"

var rnd = Math.round(Math.random()*9+1);
var guess = prompt("Guess a number between 1 and 10");
if(guess == rnd){
	alert("Good Work!");
}
else{
	alert("Not matched");
}

//9. Write a JavaScript program to calculate days left until next Christmas. 

//Get current date
var dateToday = new Date();

//check whether current date is after christmas
if(dateToday.getMonth()==11){
	if(dateToday.getDate()>25){
		var xmas = new Date("December 25, "+(dateToday.getFullYear()+1));
	}
	else if(dateToday.getDate() == 25){
		var xmas = new Date("December 25, "+dateToday.getFullYear());
		console.log("==================================");
		console.log("MERRY CHRISTMAS!!!!")
		console.log("==================================");
	}
	else{
		var xmas = new Date("December 25, "+dateToday.getFullYear());
	}
}
else{
	var xmas = new Date("December 25, "+dateToday.getFullYear());
}
if(xmas!=dateToday){
	var diff = xmas.getTime() - dateToday.getTime(); //get millisecond difference between next Christmas and today
	var msToDay = 1*24*60*60*1000; //conversion factor from milliseconds to days
	var daysDiff = Math.floor(diff/msToDay);
	console.log("There are "+daysDiff+" days more before Christmas");	
}

//10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var prod;
var quo;
var output = document.querySelector("#output");
function mult(e){
	prod = first.value * second.value;
	output.innerText = prod;
}
function div(e){
	quo = first.value / second.value;
	output.innerText = quo;
}
multiply.addEventListener("click",mult);
divide.addEventListener("click",div);