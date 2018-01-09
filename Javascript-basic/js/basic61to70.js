/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 61 to 70

========================*/

//61. Write a JavaScript program to concatenate two strings except their first character.

function joinCharsNoFirst(str1,str2){
	if(str1.length > 1) str1 = str1.substr(1);
	if(str2.length>1) str2 = str2.substr(1);
	return str1.concat(str2);
}

//62. Write a JavaScript program to move last three character to the start of a given string. 
//The string length must be greater or equal to three.

function lastThreeToStart(str){
	if(str.length<3){return "Please enter a string that is at least 3 characters long"};
	var lastThree = str.substr(str.length-3);
	str = str.substr(0,str.length-3);
	return lastThree.concat(str);
}

//63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
//The string length must be greater or equal to three. 

function middleStr(str){
	if(str.length%2 == 0) return "Please enter a string with an odd length";
	var str1 = str.substr(0,(str.length+1)/2);
	var str2 = str.substr((str.length+1)/2);
	return str1.substr(str1.length-2).concat(str2.substr(0,1));
}

//64. Write a JavaScript program to concatenate two strings and return the result. 
//If the length of the strings are not same then remove the characters from the longer string

function newStr(str1,str2){
	if(str1.length>str2.length) str1 = str1.substr(str1.length-str2.length);
	if(str2.length>str1.length) str2 = str2.substr(str2.length-str1.length);
	var str = str1.concat(str2);
	return str;
}

//65. Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.

function endsWithScript(str){
	if(str.length<6) return "Please enter a string at least 6 characters long";
	return str.search("Script") ==str.length-6 || str.search("script") ==str.length-6;
}

