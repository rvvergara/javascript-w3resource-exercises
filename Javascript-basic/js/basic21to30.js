/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 21 to 30

========================*/

//21. Write a JavaScript program to create a new string adding "Py" in front of a given string. 
//If the given string begins with "Py" then return the original string.

var str = prompt("Please enter a string");
if(str.charAt(0)=="P" || str.charAt(0)=="p" && str.charAt(1) == "y" || str.charAt(1) == "Y"){
	console.log(str);
}
else{
	console.log("Py"+str);
}

//22. Write a JavaScript program to remove a character at the specified position of a 
//given string and return the new string. 

var str = prompt("Please enter a string");
var pos = Number(prompt("Please enter position of character to remove from string"));

str = str.substr(0,pos)+str.substr(pos+1,str.length-1);

//23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. 
//The string length must be greater than or equal to 1. 

var str = prompt("Please enter a string");

var first = str.charAt(0);
var last = str.charAt(str.length-1);

str = last + str.substr(1,str.length-2) + first;

//24. Write a JavaScript program to create a new string from a given string with the first character of 
//the given string added at the front and back. 

var str = prompt("Please enter a string");
var first = str.charAt(0);
str = first + str + first;

//25. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.

var numbr = parseInt(prompt("Please enter an integer"));
if(numbr%3 == 0 && numbr%7 == 0){
	console.log("The integer is divisible by both 3 and 7");
}
else if(numbr%3 == 0){
	console.log("The integer is divisible by 3");
}
else if(numbr%7 == 0){
	console.log("The integer is divisible by 7");
}	
else{
	console.log("The integer is not divisible by either 3 or 7");
}

