"use strict";
function Cat(name, breed) {
	this.name = name;
	this.breed = breed;
	this.meow = function () {
		alert("Мяу!");
	}
}
const cat = new Cat("Barsik", "Sphinx");
cat.meow();

//2
function User(firstName, lastName, age) {
	this.firstName = firstName,
		this.lastName = lastName,
		this.age = age,
		this.greet = function () {
			alert(`Hello, ${this.firstName}`);
		}
}
const user = new User("Vasya", "Petrov", 33);
user.greet();