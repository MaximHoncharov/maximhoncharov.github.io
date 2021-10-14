"use strict";
//1
const wannaBeer = confirm("Do you wanna beer?");
let answer;

if (wannaBeer) {
	answer = "I was counting in this answer";
} else {
	answer = "Wrong choice";
}
console.log(answer);

answer = wannaBeer ? "I was counting in this answer" : "Wrong choice";
console.log(answer);


//2
const userAge = prompt("How old are you?", "18");
let greetings;
if (userAge < 18) {
	greetings = "I'm sorry, you're very young!";
} else if (userAge < 30) {
	greetings = "What's up!";
} else {
	greetings = "Good day, sir!";
}
console.log(greetings);

greetings = (userAge < 18) ? "I'm sorry, you're very young!" :
	(userAge < 30) ? "What's up!" :
		"Good day, sir!";
console.log(greetings);

//3
const teaOrCofee = confirm("Tea or Coffee. You wanna tea?");
const sugar = confirm("Add sugar?");
let guestDrink;

if (teaOrCofee && sugar) {
	guestDrink = "Sweet tea";
} else if (teaOrCofee) {
	guestDrink = "Tea without sugar";
} else if (sugar) {
	guestDrink = "Coffee with sugar";
} else {
	guestDrink = "Sugar free coffee";
}
console.log(guestDrink);


guestDrink = (teaOrCofee && sugar) ? "Sweet tea" :
	(teaOrCofee && !sugar) ? "Tea without sugar" :
		(!teaOrCofee && sugar) ? "Coffee with sugar" :
			"Sugar free coffee";
console.log(guestDrink);