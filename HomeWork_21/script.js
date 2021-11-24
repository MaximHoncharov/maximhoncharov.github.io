"use strict";

function deepCopy(obj) {
	let cloneObject;
	let value;
	let key;
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}
	cloneObject = Array.isArray(obj) ? [] : {}
	for (key in obj) {
		value = obj[key];
		cloneObject[key] = deepCopy(value);
	}
	return cloneObject
}

