"use strict";

//1
//a
function sumOfArray(arr) {
	const sum = arr.reduce((result, elem) => result + elem, 0);
	console.log(sum);
};
sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//b
function sumOfArray2(arr) {
	let sum = 0;
	for (let i = 0; i <= arr.length; i++) {
		sum += i;
	}
	console.log(sum);
}
sumOfArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//2
//a
function mapToUpperCase(arr) {
	const upperArr = arr.map((elem) => {
		return elem.toUpperCase();
	});
	console.log(upperArr);
}
mapToUpperCase([`Apple`, `Banana`, `Pineapple`]);
//b
function mapToUpperCase(arr) {
	let upperArr = [];
	for (let i = 0; i < arr.length; i++) {
		upperArr[i] = arr[i].toUpperCase();
	};
	console.log(upperArr);
}
mapToUpperCase([`Apple`, `Banana`, `Pineapple`]);








