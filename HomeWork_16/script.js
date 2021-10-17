"use strict";

//1
function capitalize(string) {
	return string
		.split(" ")
		.map((elem) => elem[0].toUpperCase() + elem.slice(1))
		.join(" ");
}

//2
function checkSubstring(string, substring) {
	return string
		.toLowerCase()
		.includes(substring.toLowerCase());
}

checkSubstring("Привет, как дела у бедеющих JSсеров", "привет")