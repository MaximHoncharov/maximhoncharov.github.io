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
function sendRequest(
	method,
	url,
	{ body, headers = {} } = {},
	callback
) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);

	Object.keys(headers).forEach((key) => {
		xhr.setRequestHeader(key, headers[key]);
	});

	xhr.send(body);

	xhr.addEventListener('load', () => {
		if ([200, 201, 204].includes(xhr.status)) {
			callback(null, xhr.response);
		} else {
			callback(xhr.response);
		}
	});
}

const user = {
	firstName: 'Vasya',
	lastName: 'Ivanov',
};

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=20', {
	body: JSON.stringify(user),
	headers: {
		'Content-type': 'application/json; charset=utf-8',
	}
}, (err, response) => {
	if (err) {
		console.error(err);
		return;
	}
	try {
		response = JSON.parse(response);
	} catch (err) {
		console.error(err);
	}
	const { id } = response;
	const extension = { age: 33 };

	sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, {
		body: JSON.stringify(extension),
		headers: {
			'Content-type': 'application/json; charset=utf-8',
		}
	}, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}?prob=20`, {},
			(err) => {
				if (err) {
					console.error(err);
				} else {
					console.log("DELETE!")
				}
			});
	});
});

//Bonus

function sendRequest(
	method,
	url,
	{ body, headers = {} } = {},
	callback
) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url);
	Object.keys(headers).forEach((key) => {
		xhr.setRequestHeader(key, headers[key]);
	});
	xhr.send(body);
	xhr.addEventListener('load', () => {
		if ([200, 201, 204].includes(xhr.status)) {
			callback(null, xhr.response);
		} else {
			callback(xhr.response);
		}
	});
}
const userOne = {
	firstName: 'Ibragim',
	lastName: 'Yunusov',
}
const userTwo = {
	firstName: 'Marichka',
	lastName: 'Padalko',
}
const userThree = {
	firstName: 'Leonid',
	lastName: 'Yakubovich',
}

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=5', {
	body: JSON.stringify(userOne),
	headers: {
		'Content-type': 'application/json; charset=utf-8',
	}
}, (err, response) => {
	if (err) {
		console.error(err);
		return;
	}
	let receivedUserOne;
	try {
		receivedUserOne = JSON.parse(response);
	} catch (err) {
		console.error(err);
	}
	const getRandomUserOneAge = new XMLHttpRequest();
	getRandomUserOneAge.open('GET', '/unstable?maxRandom=100&prob=5');
	getRandomUserOneAge.send();
	getRandomUserOneAge.addEventListener('load', () => {
		if (getRandomUserOneAge.status != 200) {
			console.error(getRandomUserOneAge.response);
		} else {
			console.log(getRandomUserOneAge.response);
		}
		const addUserOneAge = new XMLHttpRequest();
		addUserOneAge.open('PATCH', `https://async-demo.herokuapp.com/objects/${1}/?prob=5`);
		addUserOneAge.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		const userOneInfo = JSON.stringify({
			age: +getRandomUserOneAge.response,
		});
		addUserOneAge.send(userOneInfo);
		addUserOneAge.addEventListener('load', () => {
			if (addUserOneAge.status != 200) {
				console.error(addUserOneAge.response);
				return;
			}
			try {
				const receivedU1 = JSON.parse(addUserOneAge.response);
				console.log(receivedU1);
			} catch (err) {
				console.error(err);
			}
		});
	});
})


sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=5', {
	body: JSON.stringify(userTwo),
	headers: {
		'Content-type': 'application/json; charset=utf-8',
	}
}, (err, response) => {
	if (err) {
		console.error(err);
		return;
	}
	let receivedUserTwo;
	try {
		receivedUserTwo = JSON.parse(response);
	} catch (err) {
		console.error(err);
	}
	const getRandomUserTwoAge = new XMLHttpRequest();
	getRandomUserTwoAge.open('GET', '/unstable?maxRandom=100&prob=5');
	getRandomUserTwoAge.send();
	getRandomUserTwoAge.addEventListener('load', () => {
		if (getRandomUserTwoAge.status != 200) {
			console.error(getRandomUserTwoAge.response);
		} else {
			console.log(getRandomUserTwoAge.response);
		}
		const addUserTwoAge = new XMLHttpRequest();
		addUserTwoAge.open('PATCH', `https://async-demo.herokuapp.com/objects/${2}/?prob=5`);
		addUserTwoAge.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		const userTwoInfo = JSON.stringify({
			age: +getRandomUserTwoAge.response,
		});
		addUserTwoAge.send(userTwoInfo);
		addUserTwoAge.addEventListener('load', () => {
			if (addUserTwoAge.status != 200) {
				console.error(addUserTwoAge.response);
				return;
			}
			try {
				const receivedU2 = JSON.parse(addUserTwoAge.response);
				console.log(receivedU2);
			} catch (err) {
				console.error(err);
			}
		});
	});
})


sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=5', {
	body: JSON.stringify(userThree),
	headers: {
		'Content-type': 'application/json; charset=utf-8',
	}
}, (err, response) => {
	if (err) {
		console.error(err);
		return;
	}
	let receivedUserThree;
	try {
		receivedUserThree = JSON.parse(response);
	} catch (err) {
		console.error(err);
	}
	const getRandomUserThreeAge = new XMLHttpRequest();
	getRandomUserThreeAge.open('GET', '/unstable?maxRandom=100&prob=5');
	getRandomUserThreeAge.send();
	getRandomUserThreeAge.addEventListener('load', () => {
		if (getRandomUserThreeAge.status != 200) {
			console.error(getRandomUserThreeAge.response);
		} else {
			console.log(getRandomUserThreeAge.response);
		}
		const addUserThreeAge = new XMLHttpRequest();
		addUserThreeAge.open('PATCH', `https://async-demo.herokuapp.com/objects/${3}/?prob=5`);
		addUserThreeAge.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		const userThreeInfo = JSON.stringify({
			age: +getRandomUserThreeAge.response,
		});
		addUserThreeAge.send(userThreeInfo);
		addUserThreeAge.addEventListener('load', () => {
			if (addUserThreeAge.status != 200) {
				console.error(addUserThreeAge.response);
				return;
			}
			try {
				const receivedU3 = JSON.parse(addUserThreeAge.response);
				console.log(receivedU3);
			} catch (err) {
				console.error(err);
			}
		});
	});
})