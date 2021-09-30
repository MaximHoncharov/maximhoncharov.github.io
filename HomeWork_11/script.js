"use strict";
let keepUserData = {
	Admin: "administrator",
	Admin2: "administrator2",
}

console.log(keepUserData);

function createNewUser() {
	newUserLogin = prompt("Create a login", "");
	newUserPassword = prompt("Enter you password", "");
}

//const CORRECT_LOGIN = "Admin";
//const CORRECT_PASSWORD = "administrator";
// элемент 1 - проверка логина
const login = prompt("Введите Логин", "Admin");
//const isLoginValid = login === CORRECT_LOGIN;
// элемент 2 - проверка пароля
let isPasswordValid = false;
let shouldRepeat = true;
while (shouldRepeat) {
	const password = prompt("Введите пароль", "administrator");
	isPasswordValid = password === CORRECT_PASSWORD;
	// спрашиваем снова только если юзер ввёл правильный логин
	// или неправильный пароль
	if (!isLoginValid || isPasswordValid) break;
	shouldRepeat = confirm("Не угадали. Ещё раз?");
}
// элемент 3 - вывод результата
let authMessage;
if (!isLoginValid) {
	authMessage = 'логин невалидный';
} else if (!isPasswordValid) {
	authMessage = 'пароль невалидный';
} else {
	authMessage = `Привет, ${CORRECT_LOGIN}`;
}
console.log(authMessage);