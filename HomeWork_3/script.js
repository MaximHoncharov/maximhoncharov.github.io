"use strict";

const userName = prompt("Enter you name", "Vasya");
const userAge = +prompt("Enter you age", "19");
const userRole = prompt("Enter you role", "Admin");
const userOccupation = prompt("Enter you occupation", "CEO");

console.log((userName && userAge > 18) || userName === undefined) ?? false;
console.log(userRole === "Admin" && userOccupation === "CEO");
console.log(userOccupation || userRole || "Вы не ввели значения");
console.log((userName && userAge > 18) || userRole === "Admin");
console.log(userRole !== "Admin" && userName && `You age ${userAge}` || false);



