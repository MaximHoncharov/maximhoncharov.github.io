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

function getNumber(value, firstOption, secondOption) {
	if (+value < 100) {
		firstOption();
	} else {
		secondOption();
	}
}
getNumber(
	+prompt("Enter value", ""),
	function () {
		alert("Number less than 100");
	},
	function () {
		alert("Number over than 100");
	},
);