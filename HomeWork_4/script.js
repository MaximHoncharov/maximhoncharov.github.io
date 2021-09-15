"use strict";

const firstValue = +Math.round(prompt('Введите первое число'));
const secondValue = +Math.round(prompt('Введите второе число'));
const operator = prompt('Что нужно сделать с числами ?', '+,-,*,/,**,OMG');
let result;

if (Number(firstValue) >= 0 && Number(secondValue) > 1) {
	if (operator === "+") {
		console.log(result = `${firstValue + secondValue}`);
	} else if (operator === "-") {
		console.log(result = `${firstValue - secondValue}`);
	} else if (operator === "*") {
		console.log(result = `${firstValue * secondValue}`);
	} else if (operator === "/") {
		console.log(result = `${firstValue / secondValue}`);
	} else if (operator === "**") {
		console.log(result = `${(firstValue) ** secondValue}`);
	} else if (operator === "OMG") {
		if (firstValue < secondValue) {
			console.log(secondValue);
		} else {
			result = `${Math.round(firstValue / secondValue) * secondValue}`;
			console.log(result);
		}
	} else {
		console.log("Error");
	}
} else {
	console.log("Error");
}

