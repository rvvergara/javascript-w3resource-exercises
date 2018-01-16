/*=====================

Javascript Function Exercises w3resource.com 

Numbers 1 to 10

========================*/

//1. Write a JavaScript function that reverse a number
//Example x = 32243;
//Expected Output : 34223 

function reverseNum(num){
	var arrStr = (String(num)).split("");
	return Number(arrStr.reverse().join(""));
}

//2. Write a JavaScript function that checks whether a passed string is palindrome or not?
//A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str){
	var re = /[ ]/g;
	var strArr1 = (str.replace(re,"")).split("");
	var strArr2 = (str.replace(re,"")).split("").reverse();
	for(let i=0;i<strArr1.length;i++){
		if(strArr1[i]!=strArr2[i]) return str+" is NOT a palindrome";
	}
	return str+" is a palindrome";
}

//3. Write a JavaScript function that generates all combinations of a string. 

//4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 

function alphabetize(str){
	return (str.split("").sort()).join("")
}

//5. Write a JavaScript function that accepts a string as a parameter and 
//converts the first letter of each word of the string in upper case.

function capitalizeFirst(str){
	var arr=str.split("");
	for(var i=0;i<arr.length;i++){
		if(i==0) arr[i]=arr[i].toUpperCase();
		else if(arr[i]==" ") arr[i+1]=arr[i+1].toUpperCase();
	}
	return arr.join("");
}

//6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function findLongest(str){
	var arr = str.split(" "),str2="";
	for(var i=0;i<arr.length-1;i++){
		if(arr[i].length > arr[i+1].length) str2 = arr[i];
		else str2 = arr[i+1];
	}
	return str2;
}

//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function countVowels(str){
	var vowels = ['a','e','i','o','u'],count=0;
	for(var i=0;i<str.length;i++){
		if(vowels.indexOf(str[i])!=-1) count++;
	}
	return count;
}

//8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
//Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num){
	for(var i=2;i<10;i++){
		if(i!=num && num%i==0) return "The number is NOT prime"
	}
	return "Number is prime";
}

//9. Write a JavaScript function which accepts an argument and returns the type.

function whatType(arg){
	return typeof arg;
}

//10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identityMatrix(num){
	var str="|";
	for(var j=0;j<num;j++){
		for(var i=0;i<num;i++){
			if(i==j){
				str+=" "+1;
			}
			else str=str+" "+0;
			if(i==num-1&&j!=num-1) str+=" |\n|";
		}
	}
	str+=" |";
	console.log(str);
}