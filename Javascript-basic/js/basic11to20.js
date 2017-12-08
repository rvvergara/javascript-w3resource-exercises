/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 11 to 20

========================*/

//11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

/*
degC to degF => F = 9/5C + 32
degF to degC => C = 5/9(F - 32)
*/

//input and output in basic11to20.html file
//answer to this i already did before and pasting here from my codepen pen

var temp1 = form1.temp1;
var unit1 = form1.unit1;
var unit2 = form1.unit2;
var result = form1.result;
var temp2;
function unitSame(e){
	if(unit1[unit1.selectedIndex].value == unit2[unit2.selectedIndex].value){
		temp2 = Number(temp1.value);
	}
	else if(unit1[unit1.selectedIndex].value == "c"){
		temp2 = Math.round(9/5*Number(temp1.value)+32);
	}
	else{
		temp2 = Math.round(5/9*Number(temp1.value-32));
	}
	result.value = "Temperature in "+unit2[unit2.selectedIndex].text+" is "+temp2;
	result.classList.add("result");
}
form1.addEventListener("change",unitSame);

//12. Write a JavaScript program to get the website URL (loading page).

console.log(location.href);
//or
console.log(document.URL);

//13. Write a JavaScript exercise to create a variable using a user-defined name.

var x = "i am ";
var y = "cool";
console.log(x+y);

//14. Write a JavaScript exercise to get the extension of a filename. 
var fileName = prompt("Enter complete filename");
var regEx = /\.\w+/gi;
var pos = fileName.search(regEx);
fileName.substr(pos);

//15. Write a JavaScript program to get the difference between a given 
//number and 13, if the number is greater than 13 return double the absolute difference.

var input = prompt("Pleae enter an integer");
var diff;
if(input <=13){
	diff = Math.abs(parseInt(input) - 13);
}
else{
	diff = Math.abs(2*(parseInt(input)-13));
}
console.log(diff);