/*=====================

Javascript Basic Exercises w3resource.com 

Numbers 71 to 80

========================*/

//71. Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. 
//The array length must be greater or equal to 1. 

function oneInFirstOrLast(arr){
	switch(true){
		case arr[0] == 1:
		return "1 is in the first position";
		break;
		
		case arr[arr.length-1]==1:
		return "1 is in the last position";
		break;
		
		default:
		return "1 is not in first or last position"	
	}
}

//72. Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3. 

function firstAndLastEqual(arr){
	return arr[0] == arr[arr.length-1];
}

//73. Write a JavaScript program to reverse the elements of a given array of integers length 3. 

function reverseNumArr(arr){
	return arr.reverse();
}

//74. Write a JavaScript program to find the larger value between the first or last and set all the 
//other elements with that value. Display the new array.

function larger(arr){
	var arr2 = [],largest = Math.max(arr[0],arr[arr.length-1]);
	for(let i=0;i<arr.length;i++){
		arr2[i]=largest;
	}
	return arr2;
}

//75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.

function middleOfEach(arr1,arr2){
	if(arr1.length != 3 || arr2.length !=3) return "Please enter arrays with only length 3";
	var arr3 = [arr1[1],arr2[1]];
	return arr3;
}

//76. Write a JavaScript program to create a new array taking the first and last elements from a given array of 
//integers and length must be greater or equal to 1. 

function firstAndLast(arr){
	return [arr[0],arr[arr.length-1]];
}

//77. Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3. 

function oneOrThree(arr){
	if(arr.length != 2) return "Please enter a 2 element array of integers only";
	for(var i=0;i<2;i++){
		if(arr[i] == 1 || arr[i] == 3) return true;
	}
	return false;
}

//78. Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3. 

function NoOneOrThree(arr){
	if(arr.length != 2) return "Please enter a 2 element array of integers only";
	for(var i=0;i<2;i++){
		if(arr[i] == 1 || arr[i] == 3) return false;
	}
	return true;
}

//79. Write a JavaScript program to test if a given array of integers contains 30 and 40 twice. 
//The array length should be 0, 1, or 2.

function twiceThirtyOrFourty(arr){
	return ((arr[0] == 30 && arr[1]==30) || (arr[0]==40 && arr[1]==40));
}

//80. Write a JavaScript program to swap the first and last elements of a given array of integers. 
//The array length should be at least 1.

function swapFirstAndLast(arr){
	var arr2 = [];
	for(var i=1;i<arr.length-1;i++){
		arr2.push(arr[i]);
	}
	arr2.push(arr[0]);
	arr2.unshift(arr[arr.length-1]);
	return arr2;
}