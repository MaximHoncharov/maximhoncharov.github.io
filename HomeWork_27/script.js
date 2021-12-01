"use strict";
//1
const xhr = new XMLHttpRequest();
xhr.open('GET', '/unstable?maxRandom=20&prob=50');
xhr.send();
xhr.addEventListener('load', () => {
	if (xhr.status !== 200) {
		console.error(xhr.response);
	} else {
		console.log('Hello world '.repeat(xhr.response));
	}
})
//2
const addUser = new XMLHttpRequest();
addUser.open("POST", "https://async-demo.herokuapp.com/objects/?prob=20");
addUser.setRequestHeader("Content-type", "application/json; charset=utf-8");
const user = JSON.stringify({
	firstName: "Vasya",
	lastName: "Ivanov",
});
addUser.send(user);
addUser.addEventListener("load", () => {
	if (addUser.status !== 201 && addUser.status !== 200 && addUser.status !== 204) {
		console.error(addUser.response);
		return;
	}
	try {
		const userId = JSON.parse(addUser.response);
		console.log(userId);
		const addAge = new XMLHttpRequest();
		addAge.open("PATCH", `https://async-demo.herokuapp.com/objects/${userId.id}/?prob=20`);
		const age = JSON.stringify({ age: 33 });
		addAge.setRequestHeader("Content-type", "application/json; charset=utf-8");
		addAge.send(age);
		addAge.addEventListener("load", () => {
			if (addAge.status !== 201 && addAge.status !== 200 && addAge.status !== 204) {
				console.error(addAge.response);
				return;
			}
			const newUserId = JSON.parse(addAge.response);
			console.log(newUserId);
			const deleteUser = new XMLHttpRequest();
			deleteUser.open("DELETE", `https://async-demo.herokuapp.com/objects/${newUserId.id}/?prob=20`);
			deleteUser.send();
			deleteUser.addEventListener("load", () => {
				if (deleteUser.status !== 201 && deleteUser.status !== 200 && deleteUser.status !== 204) {
					console.error(deleteUser.response);
					return;
				}
				console.log(`DONE!`);
			});
		})
	} catch (error) {
		console.error(error);
	}
})