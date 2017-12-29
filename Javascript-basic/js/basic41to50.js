/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 41 to 50

========================*/

//41. Write a JavaScript program to check three given numbers, 
//if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20.

function areSame(x,y,z){
	if(x == y && y == z) return 30;
	else if(x==y || y==z || x==z) return 40;
	else return 20;
}

var x = 5, y = 2, z = 1;

areSame(x,y,z);

//42. Write a JavaScript program to check if three given numbers are increasing in strict mode or in soft mode.
//Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 

function strictOrSoft(x,y,z){
	if(x<y && y<z){
		return "Strict mode";
	}
	else if(x<y || y<z){
		return "Soft mode";
	}
	else{
		return "Numbers are not increasing";
	}
}


//43. Write a JavaScript program to check from three given numbers (non negative integers) 
//that two or all of them have the same rightmost digit. 

function sameRightmost(x,y,z){
	x = String(x);
	y = String(y);
	z = String(z);
	var arr = [x,y,z];
	for(let i=1;i<arr.length;i++){
		if(arr[i][arr[i].length-1] == arr[i-1][arr[i-1].length-1]) return true;
		else return false;
	}	
}

//44. Write a JavaScript program to check from three given integers that if a number 
//is greater than or equal to 20 and less than one of the others.

function greaterThanTwenty(x,y,z){
	function moreThanTwenty(num){
		return num > 20;
	}
	var arr = [x,y,z];
	for(var i=0;i<arr.length;i++){
		if(moreThanTwenty(arr[i]) && (arr[i]<arr[i+1] || arr[i]<arr[i-1])) return true;
	}
	return false;
}

//45. Write a JavaScript program to check two given integer values and return true 
//if one of the number is 15 or if their sum or difference is 15.

function isFifteen(x,y){
	return x == 15 || y == 15 || x+y == 15 || Math.abs(x-y) == 15;
}

