"use strict";

function game() {
	function newGame() {
		const randomNumber = (Math.round(Math.random() * 100));
		console.log(randomNumber);
		while (true) {
			let userNumber = +prompt("Enter number");
			if (!userNumber) {
				alert("Error");
				break;
			} else if (userNumber < randomNumber) {
				alert("Not enough");
			} else if (userNumber > randomNumber) {
				alert("Overdone");
			} else {
				alert("Hell, yeah!");
				break;
			}
		}
	}
	newGame()
	let oneMoreGame = confirm("You want to try your luck again ? ");
	while (true) {
		if (oneMoreGame) {
			newGame();
			oneMoreGame = confirm("You want to try your luck again ? ");
		} else {
			alert("I'll see you later.");
			break;
		}
	}
}
game()