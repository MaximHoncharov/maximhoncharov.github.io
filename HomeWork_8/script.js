"use strict";

//1
function pow(a, b) {
	let result = a;
	for (let i = 1; i < b; i++) {
		result *= a;
	}
	return result;
}
const a = +prompt("Enter value a");
const b = +prompt("Enter value b");

alert(pow(a, b));

//2
function createUser(firstName = null, lastName = null, age = null) {
	let newUser = {
		firstName,
		lastName,
		age
	}
	return newUser;
}
createUser()

//3
function getNumber(value, less100, over100) {
	(value < 100) ? less100() : over100();
	function less100() {
		alert("Number less than 100");
	}
	function over100() {
		alert("Number over than 100");
	}
}
getNumber()