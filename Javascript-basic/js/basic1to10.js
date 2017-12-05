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

////5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one 
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