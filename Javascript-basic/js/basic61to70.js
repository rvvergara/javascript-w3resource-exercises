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

//66. Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function displayLosOrNew(city){
	if(city.search("Los")==0 || city.search("New")==0)return city;
}

//67. Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the 
//first or last character are 'P'. Return the original string if the condition is not satisfied.

function removeP(str){
	if(str[0]=="P" || str[str.length-1]=="P"){
		var arr = str.split("");
		arr.pop();
		arr.shift();
		str = arr.join("");
	}
	return str;
}

//68. Write a JavaScript program to create a new string using the first and last n characters from a given sting. 
//The string length must be greater or equal to n.

function firstAndLastN(str,n){
	var str2 = str.substr(0,n)+str.substr(str.length-n);
	return str2;
}

//69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
function sumArray1(arr){
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum;
}

//or

function sumArray2(arr){
	function plus(a,b){
		return a+b;
	}
	return arr.reduce(plus);
}

//70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3

function rotateArr(arr){
	var arr2 = [];
	for(let i=1;i<arr.length;i++){
		arr2.push(arr[i]);
	}
	arr2.push(arr[0]);
	return arr2;
}

