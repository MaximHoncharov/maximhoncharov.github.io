"use strict";

//1
function createRangeFilter(min, max) {
	return function filter(num) {
		return num >= min && num <= max;
	}
}

//2
function createKeyBy(propName) {
	return function keyBy(arr) {
		return arr.reduce((result, elem) => {
			if (!result[elem[propName]]) {
				result[elem[propName]] = [];
			}
			result[elem[propName]].push(elem);
			return result;
		}, {});
	};
}

//3
function createCalcPercent(percent) {
	return function calcPercent(value) {
		return value / 100 * percent;
	}
}