"use strict";

/* let inputMinutes = document.querySelector('.input-minutes');
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
		let timerValue = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
		timer.innerHTML = timerValue;
	}
	timerSeconds--;
}, 1000)

function endTime() {
	timer.innerHTML = 'TIME OUT';
	timer.style.color = 'red';
} */


const startTimer = document.querySelector('button');
startTimer.addEventListener('click', go);
/* let timeMinutes = +prompt('Minutes', '');
let timeSeconds = +prompt('Seconds', '');
alert('Нажми СТАРТ'); */
let timeMinutes = document.getElementById('input-minutes');
let timeSeconds = document.getElementById('input-seconds');

function go() {
	const timer = document.querySelector('h1');

	let timeMinutes = document.getElementById('input-minutes');
	let timeSeconds = document.getElementById('input-seconds');

	displayTime(timeMinutes, timeSeconds);
	const countDown = setInterval(() => {
		timeSeconds--;
		timer.innerHTML = `${timeMinutes}:${timeSeconds} `;
		displayTime(timeMinutes, timeSeconds);
		if (timeSeconds <= 0 && timeMinutes === 0) {
			endTime();
			clearInterval(countDown);
		} else if (timeMinutes !== 0 && timeSeconds === 0) {
			timeMinutes = (timeMinutes - 1);
			timeSeconds = 60;
		}
	}, 1000);

	function displayTime(timeMinutes, timeSeconds) {
		let sec = Math.floor(timeSeconds % 60);
		let min = timeMinutes + Math.floor(timeSeconds / 60);
		timer.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
	}

	function endTime() {
		timer.innerHTML = 'TIME OUT';
		timer.style.color = 'red';
	}
}