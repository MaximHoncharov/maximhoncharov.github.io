"use strict";
//1
/* const xhr = new XMLHttpRequest();
xhr.open('GET', '/unstable?maxRandom=20&prob=50');
xhr.send();
xhr.addEventListener('load', () => {
	if (xhr.status !== 200) {
		console.error(xhr.response);
	} else {
		console.log('Hello world '.repeat(xhr.response));
	}
}) */
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

sendRequest('POST', 'https://async-demo.herokuapp.com/objects?prob=0', {
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
	const extension = { age: 67 };

	sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}?prob=0`, {
		body: JSON.stringify(extension),
		headers: {
			'Content-type': 'application/json; charset=utf-8',
		}
	}, (err) => {
		if (err) {
			console.error(err);
			return;
		}
		sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}?prob=0`, {},
			(err) => {
				if (err) {
					console.error(err);
				} else {
					console.log("DELETE!")
				}
			});
	});
});