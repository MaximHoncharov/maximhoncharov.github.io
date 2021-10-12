"use strict";

//1
//a
function sumOfArray(arr) {
	const sum = arr.reduce((result, elem) => result + elem, 0);
	return sum;
};
//b
function sumOfArray(arr) {
	let sum = 0;
	for (let i = 0; i <= arr.length; i++) {
		sum += i;
	}
	return sum;
}

//2
//a
function mapToUpperCase(arr) {
	const upperArr = arr.map((elem) => {
		return elem.toUpperCase();
	});
	return upperArr;
}
//b
function mapToUpperCase(arr) {
	let upperArr = [];
	for (let i = 0; i < arr.length; i++) {
		upperArr[i] = arr[i].toUpperCase();
	};
	return upperArr;
};









