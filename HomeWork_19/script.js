"use strict";

const addButton = document.querySelector('.addItem');
addButton.addEventListener('click', function () {
	const input = document.querySelector('input');
	const toDoList = document.querySelector('.list');
	const removeButton = document.querySelector('.removeItem');
	const newLi = document.createElement('li');
	newLi.innerHTML = input.value;
	toDoList.append(newLi);
	input.value = '';
	newLi.addEventListener('click', function () {
		newLi.style.backgroundColor = "pink";
		removeButton.addEventListener('click', function () {
			newLi.remove();
		})
	})
})



