"use strict";

//1
String.prototype.reverse = function () {
	return this.split("").reverse().join("");
}

//2
Array.prototype.sort = function () {
	let copyArray = [...this];
	for (let i = 0; i < copyArray.length; i++) {
		for (let j = 0; j < copyArray.length - 1 - i; j++) {
			if (copyArray[j] > copyArray[j + 1]) {
				const swap = copyArray[j];
				copyArray[j] = copyArray[j + 1];
				copyArray[j + 1] = swap;
			}
		}
	}
	return copyArray;
}

//3
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;