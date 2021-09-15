"use strict";

let firstValue = 0;
let secondValue = 1;
let thirdValue;
const ordinalNumber = +prompt("Which number from the Fibonacci sequence to show ?");
for (let i = 3; i <= ordinalNumber; i++) {
	thirdValue = firstValue + secondValue;
	firstValue = secondValue;
	secondValue = thirdValue;
}
if (ordinalNumber === 1) {
	console.log("0");
} else if (ordinalNumber === 2) {
	console.log("1");
} else if (thirdValue === undefined) {
	console.log("Incorrect value");
} else {
	console.log(thirdValue);
}

/* const n = +prompt("Enter number", "1");
label:
for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue label;
	}
	console.log(i);
} */
