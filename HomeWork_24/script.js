"use strict";

let inputMinutes = document.querySelector('.input-minutes');
let inputSeconds = document.querySelector('.input-seconds');
let button = document.getElementById("btn");
let timer = document.getElementById("timer");
let timerSeconds;
button.addEventListener('click', function () {
	timerSeconds = +(inputSeconds.value) + (+(inputMinutes.value) * 60)
})
let startTimer = setInterval(function () {
	let seconds = Math.floor(timerSeconds % 60);
	let minutes = Math.floor(timerSeconds / 60 % 60);
	if (timerSeconds === 0) {
		clearInterval(startTimer);
		endTime();
	} else {
		let timerValue = /* `${Math.trunc(minutes)}:${seconds}`; */
			`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
		timer.innerHTML = timerValue;
	}
	timerSeconds--;
}, 1000)

function endTime() {
	timer.innerHTML = 'TIME OUT';
	timer.style.color = 'red';
}