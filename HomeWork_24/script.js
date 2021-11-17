"use strict";

const startTimer = document.querySelector('button');
startTimer.addEventListener('click', go);
let timeMinutes = +prompt('Minutes', '');
let timeSeconds = +prompt('Seconds', '');
alert('Нажми СТАРТ');

function go() {
	const timer = document.querySelector('h1');

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