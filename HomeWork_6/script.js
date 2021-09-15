"use strict";

const correctLogin = "JS Developer";
const correctPass = "12345";

const userLogin = prompt("Enter your login", "JS Developer");
let userPass = prompt("Enter your password", "12345");
if (userLogin !== correctLogin) {
	console.log("Wrong login. Try again");
} else if (userPass === correctPass) {
	console.log(`Hello, ${userLogin}`);
} else {
	while (userPass !== correctPass) {
		userPass = prompt("Enter your password", "12345");
		if (userPass === null) break;
	}
	(userPass === correctPass) ? console.log(`Hello, ${userLogin}`) :
		console.log("Wrong password");
}



