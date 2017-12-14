/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 31 to 40

========================*/

//31. Write a JavaScript program to find the largest of three given integers. 

var x = parseInt(prompt("Please enter first integer"));
var y = parseInt(prompt("Please enter second integer"));
var z = parseInt(prompt("Please enter third integer"));

console.log("The biggest of the three integers is "+Math.max(x,y,z));

//32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

var x = parseInt(prompt("Please enter first integer"));
var y = parseInt(prompt("Please enter second integer"));

var diff1 = Math.abs(100-x);
var diff2 = Math.abs(100-y);

if(diff1<diff2){
	console.log(x+" is closer to 100 than "+y);
}
else if(diff1>diff2){
	console.log(y+" is closer to 100 than "+x);
}
else{
	console.log("Your integers are the same");
}

//33. Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100

var x = Number(prompt("Please enter first integer"));
var y = Number(prompt("Please enter second integer"));

switch(true){
	case (x>=40 && x<=60):
	console.log(x+" is within the range of 40 to 60");
	break;
	
	case (x>=70 && x<=100):
	console.log(x+" is within the range of 70 to 100");
	break;
	
	default:
	break;
}

switch(true){
	case (y>=40 && y<=60):
	console.log(y+" is within the range of 40 to 60");
	break;
	
	case (y>=70 && y<=100):
	console.log(y+" is within the range of 70 to 100");
	break;
	
	default:
	break;
}

//34. Write a JavaScript program to find the larger number from the two given positive integers, 
//the two numbers are in the range 40..60 inclusive.

var x = Number(prompt("Please enter first number"));
while(!(x>=40 && x<=60)){
	x = Number(prompt("Please enter first number, must be between 40 and 60")); 
}
var y = Number(prompt("Please enter second number"));
while(!(y>=40 && y<=60)){
	y = Number(prompt("Please enter second number, must be between 40 and 60"));
}
console.log(Math.max(x,y)+" is the larger number");

//35. Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.

var str = prompt("Please enter a string");
var spec = prompt("Enter a character you wish to check");

for(i=0, count=0;i<str.length;i++){
	if(str[i] == spec){
		count++;
	}
}
if(count>=2 && count<=4){
	console.log("'"+str+"' contains "+count+" instances of'"+spec+"'");
}
