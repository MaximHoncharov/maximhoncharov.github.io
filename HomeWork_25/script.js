"use strict";

//1
String.prototype.reverse = function () {
	return this.split("").reverse().join("");
}

//2
Array.prototype.notMutableSorting = Array.prototype.sort;
Array.prototype.sort = function () {
	return [...this].notMutableSorting();
}

//3
NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;