"use strict";

//1
function printArrayValue(arr) {
	let i = 0;
	const showElem = setInterval(function () {
		console.log(arr[i]);
		if (i === arr.length - 1) {
			clearInterval(showElem);
		}
		i++;
	}, 1000);
}

function printArrayValue(arr) {
	let i = 0;
	setTimeout(function index() {
		console.log(arr[i]);
		i++;
		if (i === arr.length) return;
		setTimeout(index, 1000);
	}, 1000);
}

//2
function debounce(func, timeout) {
	let delay;
	return function () {
		const funcCall = () => { func.apply(this, arguments) }
		clearTimeout(delay);
		delay = setTimeout(funcCall, timeout)
	};
}

//3
function throttle(func, timeout) {
	let isThrottle = false;
	let savedArgs;
	let savedThis;
	function wrapper() {
		if (isThrottle) {
			savedArgs = arguments;
			savedThis = this;
			return;
		}
		func.apply(this, arguments);
		isThrottle = true;
		setTimeout(function () {
			isThrottle = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = savedThis = null;
			}
		}, timeout);
	}
	return wrapper;
}