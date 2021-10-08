"use strict";

const usersBase = {
	admin: "123",
	user: "321",
};
function getUserLogin() {
	const login = prompt("Enter your login", "");
	if (login === null) {
		messageCancel();
		return;
	} else {
		return login;
	}
}
function getUserPassword() {
	if (userLogin) {
		let password = prompt("Enter your password", "");
		return password;
	}
}
let userLogin = getUserLogin();
let userPass = getUserPassword();
function messageWelcome() {
	alert(`Hello, ${userLogin}`);
}
function messageCancel() {
	alert("Cancel");
}
let validUser;
function checkUserValidation() {
	for (let key in usersBase) {
		if (key === userLogin) {
			if (userPass === usersBase[key]) {
				messageWelcome();
				validUser = true;
				break;
			} else {
				while (userPass !== usersBase[key]) {
					userPass = prompt("Wrong password. Try again", "");
					if (userPass === null) {
						messageCancel();
						break;
					}
				}
				if (userPass === usersBase[key]) {
					messageWelcome();
					break;
				}
			}
		}
	}
}
function autentification() {
	checkUserValidation();
	createNewUser();
	return;
	if (!validUser) {
		createNewUser()
	}
}
function createNewUser() {
	let getNewUser = confirm("Create a new user?");
	if (getNewUser) {
		let newUserLogin = prompt("Enter login for a new user");
		let newUserPassword = prompt(`Enter a password for the user: ${newUserLogin}`);
		if (!newUserLogin || !newUserPassword) {
			messageCancel();
			return;
		}
		usersBase[newUserLogin] = newUserPassword;
		autentificationNewUser();
		createNewUser();
	} else {
		alert("You did'n want to create a new user");
	}
}
function autentificationNewUser() {
	let letTry = confirm("Do you want to sing in as a new user?");
	if (letTry) {
		userLogin = getUserLogin();
		userPass = getUserPassword();
		checkUserValidation();
	} else {
		messageCancel();
	}
}
autentification();

console.log(usersBase);