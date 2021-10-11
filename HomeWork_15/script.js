"use strict";

const arr = [
	{ name: `Vasya`, surname: `Ivanov` },
	{ name: `Vanya`, surname: `Ivanov` },
	{ name: `Albert`, surname: `Vasyliev` },
]

function keyBy(arr, key) {
	const newArr = arr.reduce((newArr, user) => {
		if (!newArr[user[key]]) {
			newArr[user[key]] = [];
		}
		newArr[user[key]].push(user);
		return newArr;
	}, {});

	console.log(newArr);
}

keyBy(arr, `name`);
keyBy(arr, `surname`);