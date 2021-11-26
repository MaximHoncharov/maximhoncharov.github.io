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
	stomach = [];
	eat(food) {
		this.stomach.push(food);
		console.log(`${this.legs} eat food`);
	}
}

class Rabbit extends Animal {
	constructor(breed) {
		super();
		this.breed = breed;
	}
	jump() {
		console.log(`${this.breed} jump`);
	}
	eat(food) {
		if (!(food instanceof Vegetable)) {
			throw new Error("The rabbit only eats vegetables!")
		}
		super.eat(food);
	}
}
class Snake extends Animal {
	constructor(legs, isPoisonous) {
		super(legs);
		this.isPoisonous = isPoisonous;
	}
	crawl() {
		console.log(`${this.legs} crawling`);
	}
	eat(food) {
		if (!(food instanceof Rabbit)) {
			throw new Error("The snake only eats rabbits 🐇!")
		}
		super.eat(food);
	}
}
class Human extends Animal {
	constructor(firstName, lastName) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
	}
	walk() {
		console.log(`${this.firstName} walks`);
	}
	greet() {
		console.log(`${this.firstName} ${this.lastName} welcomes you ❤`);
	}
	eat(food) {
		if (food instanceof Human) {
			throw new Error("We condemn cannibalism!!!");
		}
		super.eat(food);
	}
}






