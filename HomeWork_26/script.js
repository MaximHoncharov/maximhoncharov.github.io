"use strict";

class Vegetable {
	constructor(name) {
		this.name = name;
	}

}

class Animal {
	constructor(legs) {
		this.legs = legs;
	}
	eat(food) {
		this.stomach = [food]
	}
	crawl() {

	}
	walk() {

	}
	greet() {
		console.log(`Hi I'm ${firstName + lastName}`)
	}
}

class Rabbit {
	constructor(breed) {
		this.breed = breed;
	}
	jump() {
	}
}

class Snake {
	constructor(isPoisonous) {
		this.isPoisonous = isPoisonous
	}

}

class Human {

	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
}

const oneUser = new Human("Vasya", "Ivanov");
const twoUser = new Human("Jenya", "Petrov");