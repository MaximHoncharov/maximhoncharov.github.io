"use strict";

function deepCopy(obj) {
	let cloneObject;
	cloneObject = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		if (typeof (obj[key]) === 'object' || obj[key] === null) {
			cloneObject[key] = deepCopy(obj[key]);
		} else {
			cloneObject[key] = obj[key];
		}
	}
	return cloneObject;
}