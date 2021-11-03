"use strict";
//1-1
function fibonacciSequence(n) {
	let firstValue = 1;
	let secondValue = 1;
	let thirdValue;
	for (let i = 2; i <= n; i++) {
		thirdValue = firstValue + secondValue;
		firstValue = secondValue;
		secondValue = thirdValue;
	}
	if (n === 1 || n === 2) return 1;
	return thirdValue;
}
//1-2
function fibonacciSequence(n) {
	return n <= 1 ? n : fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}
//2-1
function calculateFactorial(n) {
	let result = 1;
	for (let i = 1; i <= n; ++i) {
		result = result * i;
	}
	return result;
}
//2-2
function calculateFactorial(n) {
	return n ? n * calculateFactorial(n - 1) : 1;
}


