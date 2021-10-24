"use strict";
//1
const idContainerSection = document.getElementById('container');
const idContainerSection2 = document.querySelector('#container');
//2
const secondClassLi = document.querySelectorAll('li.second');
//3
const thirdClassLi = document.querySelectorAll('ol > li.third');
//4
const headerChange = document.querySelector('.header');
header.innerHTML = "Hello";
//5
const footerClass = document.querySelector('.footer');
footer.classList.add('main');
footer.classList.remove('main');
//6
const newLiCreating = document.createElement('li');
newLi.innerHTML = 'four';
//7
const ulChange = document.querySelector('ul');
ul.append(newLi);
//8
const greenLi = document.querySelectorAll('ol > li');
for (let i = 0; i < greenLi.length; i++)
	greenLi[i].style.backgroundColor = 'green';
//9
const divFooterRemove = document.querySelector('div.footer');
divFooterRemove.remove();

