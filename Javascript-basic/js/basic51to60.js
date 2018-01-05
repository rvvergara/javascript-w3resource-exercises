/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 51 to 60

========================*/

//51. Write a JavaScript program to convert a given number to hours and minutes.

function convertToHoursAndMinutes(num){
	var converted = "";
	var hrs = num/60;
	var mins = (hrs - Math.floor(hrs))*60;
	converted = Math.floor(hrs)+":"+Math.round(mins);
	return converted;
}

//52. Write a JavaScript program to convert the letters of a given string in alphabetical order. 

function arrangeAlphabetically(str){
	var arr = [];
	for(var i=0;i<str.length;i++){
		arr.push(str[i]);
	}
	arr.sort();
	str = arr.join("");
	return str;
	//shorter answer would be return str.split("").sort().join("");
	
}

//53. Write a JavaScript program to check if the characters
// a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function separatedByChars(str,char1,char2,num){ 
//str is da string, char1 n char2 r da 1st n 2nd characters, num is how many characters between them
	return Math.abs(str.indexOf(char2) - str.indexOf(char1)) == num+1;
	
}

//54. Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str){
	var vowels = ["a","e","i","o","u"];
	var count = 0;
	for(var i=0;i<str.length;i++){
		if(vowels.indexOf(str[i]) != -1) count++;
	}
	return count;
}

//55. Write a JavaScript program to check if a given string contains equal number of p's and s's present

function equalSandP(str){
	var countP = 0, countS = 0;
	for(var i=0;i<str.length;i++){
		if(str[i]=="p"|| str[i]=="P") countP++;
		else if(str[i]=="s"|| str[i]=="S") countS++;
	}
	return countP == countS;
}

//56. Write a JavaScript program to divide two positive numbers 
//and return a string with properly formatted commas.

function divideAndStringed(x,y){
	var result = Math.round(x/y), strRes = String(result),arrLength=0,arr=[];
	arrLength = strRes.length;
	for(var i=0;i<arrLength;i++){
		arr.push(strRes[i]);
	}
	return arr;
}

//57. Write a JavaScript program to create a new string of specified 
//copies (positive number) of a given string.

function copyStr(str,copies){
	var str2="";
	if(copies<=0){
		return false;
	}
	for(var i=0;i<copies;i++){
		str2+=str;
	}
	return str2;
}

//58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string.
// The length of the given string must be 3 and above.

function fourOfLastThree(str){
	if(str.length<3){
		return "Please enter a string which is at least 3 chars long";
	}
	var str2 = str.substr(str.length-3);
	for(var i=0,str3="";i<4;i++){
		str3+=str2;
	}
	return str3;
}

//59. Write a JavaScript program to extract the first half of a string of even length. 

function halfOfString(str){
	if(str.length%2 != 0){
		return "Please enter a string of even length";
	}
	return str.substr(0,str.length/2);
}

//60. Write a JavaScript program to create a new string without the first and last character of a given string.

function NoFirstAndLast(str){
	var arr = str.split("");
	arr.pop();
	arr.shift();
	return arr.join("");
}