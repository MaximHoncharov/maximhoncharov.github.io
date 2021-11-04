"use strict";

function deepCopy(obj, newObj) {
	for (let key in obj) {
		if (typeof obj[key] != "object") {
			newObj[key] = obj[key];
		} else {
			newObj[key] = {};
			deepCopy(obj[key], newObj[key]);
		}
	}
}

