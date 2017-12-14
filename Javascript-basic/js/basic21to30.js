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

<<<<<<< HEAD
//26. Write a JavaScript program to create a new string from a given string taking the last 
//3 characters and added at both the front and back. The string length must be 3 or more.

var str = prompt("Please enter a string at least 3 characters long");
while(str.length<3){
	alert("Please enter a string at least 3 characters long");
	str = prompt("Please enter a string at least 3 characters long");
}
var last = str.substr(str.length-3);
str = last + str + last;
console.log(str);

//27. Write a JavaScript program to check if a string starts with 'Java' and false otherwise.
var str = prompt("Please enter a string");
var re = /^(Java)/g;

if(str.search(re) == -1){
	console.log("The string does not start with 'Java'");
}
else{
	console.log("The string starts with 'Java'");
}

//28. Write a JavaScript program to check if two given integer values are in the range 50..99 
//(inclusive). Return true if either of them are in the said range.

var x = parseInt(prompt("Please enter an integer"));
var y = parseInt(prompt("Please enter another integer"));

if(x>=50 && x<=99 || y>=50 && y<=99){
	console.log("One of them is within our range");
}
else{
	console.log("Both are out of range");
}

//29. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). 
//Return true if one or more of them are in the said range.

var x = parseInt(prompt("Please enter an integer"));
var y = parseInt(prompt("Please enter another integer"));
var z = parseInt(prompt("Please enter a third integer"));

if(x>=50 && x<=99 || y>=50 && y<=99 || z>=50 && z<=99){
	console.log("One of them is within our range");
}
else{
	console.log("All three are out of range");
}

//30. Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, 
//if "Script" presents in the string return the string without "Script" otherwise return the original one.

var re = /(Script)/g;
var str = prompt("Please enter a string");
if(str.search(re)==4){
	str = str.slice(0,4);	
	console.log(str);
}
else{
	console.log(str);
}
