/*=====================

Javascript Function Exercises w3resource.com 

Numbers 11 to 20

========================*/

//11. Write a JavaScript function which will take an array of numbers stored 
//and find the second lowest and second greatest numbers, respectively.
//Sample array : [1,2,3,4,5]
//Expected Output : 2,4 

function secondLowestGreatest(arr){
	var biggest = Math.max.apply(null,arr);
	var smallest = Math.min.apply(null,arr);
	var arr2=[];
	for(let i=0;i<arr.length;i++){
		if(arr[i]==biggest || arr[i]==smallest) arr[i]= "null";
	}
	for(let i=0;i<arr.length;i++){
		if(typeof arr[i]=="number") arr2.push(arr[i]);
	}
	return [Math.min.apply(null,arr2),Math.max.apply(null,arr2)];
}

var testArr = [2, 2, 3, 4, 5, 6, 6, ];

//12. Write a JavaScript function which says whether a number is perfect.

function isPerfect(num){
	var divisors = [];
	for(var i=0;i<num;i++){
		if(num%i==0) divisors.push(i);
	}
	var sum1 = divisors.reduce(function(x,y){
		return x+y;
	})
	if(num==sum1) return "Perfect Number!";
	else return "Nahh"
}

//or 
function isPerfection(num){
	var sum1 = 0;
	for(var i=0;i<num;i++){
		if(num%i==0) sum1+=i;
	}
	if(sum1==num) return "Perfect!!";
	else return "Nooooo";
}

//13. Write a JavaScript function to compute the factors of a positive integer.

function findFactors(num){
	var factor = [];
	for(var i=0;i<=num;i++){
		if(num%i==0) factor.push(i);
	}
	return "The factors of "+num+" are: "+factor;
}

//14. Write a JavaScript function to convert an amount to coins.

function changeToCoins(amt,coinsArr){
	var listCoins = [];
	coinsArr.sort(function(x,y){return x-y});
	coinsArr.reverse();
	for(var i=0;i<coinsArr.length;i++){
		while(amt>=coinsArr[i]){
			amt-=coinsArr[i];
			listCoins.push(coinsArr[i]);
		}
	}
	return listCoins;
}

//15. Write a JavaScript function to compute the value of b^n where n is the exponent and b is the bases. 
//Accept b and n from the user and display the result.

function computeExp(base,exp){
	var prod = 1;
	for(var i=0;i<exp;i++){
		prod*=base;
	}
	return prod;
}

//16. Write a JavaScript function to extract unique characters from a string.

function uniqueChars(str){
	var str2="";
	for(var i=0;i<str.length;i++){
		if(str2.indexOf(str[i])==-1) str2+=str[i];
	}
	return str2;
}

//17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

function charOccurrence(str){
	var arr1 = str.split("");
	var arr2 = uniqueChars(str).split("");
	var obj = {};
	for(var i=0;i<arr1.length;i++){
		obj[arr1[i]]=0;
	}
	for(var j=0;j<arr2.length;j++){
		for(var k=0;k<arr1.length;k++){
			if(arr1[k]==arr2[j]) obj[arr2[j]]++;
		}
	}
	return obj;
}

//18. Write a function for searching JavaScript arrays with a binary search. 
/*not yet done - to be continued*/
function arrBinSearch(arr,element){
	var half = Math.floor(arr.length/2); //1
	if(arr[half]==element) return half; //arr[1]=1 < 2
	else if(arr.length==1) return null;
	else if(element<arr[half]){
		var lower = arr.slice(0,half); 
		arrBinSearch(lower,element);
	}
	else{
		var higher = arr.slice(half+1);
		arrBinSearch(higher,element);
	}
}

