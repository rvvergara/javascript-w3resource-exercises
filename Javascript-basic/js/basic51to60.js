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

