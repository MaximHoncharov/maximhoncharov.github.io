"use strict";

function keyBy(arr, key) {
	const newArr = arr.reduce((newArr, user) => {
		if (!newArr[user[key]]) {
			newArr[user[key]] = [];
		}
		newArr[user[key]].push(user);
		return newArr;
	}, {});
	return newArr;
}