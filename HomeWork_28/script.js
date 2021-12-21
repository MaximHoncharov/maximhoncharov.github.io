"use strict";

//1_1
fetch('https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50')
	.then(response => {
		if (!response.ok) {
			throw Error(response.statusText)
		}
		return response.text()
	})
	.then((response) => {
		console.log('Hello world '.repeat(response))
	})
	.catch((error) => {
		console.error(error);
	})

//1_2
async function getRandomNumber() {
	try {
		const response = await fetch('https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');
		if (!response.ok) {
			throw new Error(response.statusText);
		}
		const valueResponse = await response.text();
		console.log('Hello world '.repeat(valueResponse));
	} catch (error) {
		console.error(error)
	}
}
getRandomNumber(); * /

//1_2
function userFetch(...args) {
	return fetch(...args)
		.then(response => {
			if (!response.ok) {
				return response.text()
					.then((errMessage) => {
						throw new Error(errMessage);
					});
			}
			return response;
		});
}
const user = {
	firstName: 'Vasya',
	lastName: 'Ivanov',
}
userFetch('https://async-demo.herokuapp.com/objects/?prob=20', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	},
	body: JSON.stringify(user)
})
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		({
			id
		} = response);
		return userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				age: 33
			})
		});
	})
	.then((response) => {
		return response.json();
	})
	.then(() => {
		return userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=20`, {
			method: 'DELETE'
		})
	})
	.then(() => {
		console.log(`USER ${id} DELETED`);
	})
	.catch((err) => {
		console.log(err.message);
	});

//2_2
function userFetch(...args) {
	return fetch(...args)
}
async function sendRequest() {
	try {
		const response = await userFetch('https://async-demo.herokuapp.com/objects/?prob=0', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(user)
		})
		const result = await response.json();
		const { id } = await result;
		const changeResponse = await userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=0`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				age: 33
			})
		});
		await changeResponse.json();
		await userFetch(`https://async-demo.herokuapp.com/objects/${id}/?prob=0`, {
			method: 'DELETE'
		})
		await console.log(` ${id} DELETED`);
	} catch (err) {
		console.log(err);
	}
}
sendRequest();

//3_1
function userFetch(...args) {
	return fetch(...args)
		.then(response => {
			if (!response.ok) {
				return response.text()
					.then((errMessage) => {
						throw new Error(errMessage);
					});
			}
			return response;
		});
}

const users = [
	{
		firstName: '111',
		lastName: '111',
	},
	{
		firstName: '222',
		lastName: '222',
	},
	{
		firstName: '333',
		lastName: '333',
	},
];

async function goRequest() {
	try {
		const savedUsers = await Promise.all(
			users.map((user) => {
				userFetch('https://async-demo.herokuapp.com/objects/?prob=5', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json;charset=utf-8'
					},
					body: JSON.stringify(user)
				})
			}))
	} catch (err) {
		console.log(err.message)
	}
}
goRequest();