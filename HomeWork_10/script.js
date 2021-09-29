"use strict";

//1
function isEmpryObject(obj) {
	for (let key in obj) {
		return console.log(false);
	}
	return console.log(true);
}
isEmpryObject()

//2
function showOnlyNumbers(obj) {
	for (let key in obj) {
		if (+[key] || +[key] === 0) {
			console.log(obj[key])
		}
	}
}
showOnlyNumbers();

//Bonus
const salaries = {
	HRs: { Alice: 500, Bob: 700 },
	Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
	QAs: { Chuck: 1650, Craig: 850, Dave: 3000 }
};
let newSalary;

function copySalary(obj) {
	newSalary = JSON.parse(JSON.stringify(obj));
}
function doubleSalaries(obj) {
	copySalary(salaries);
	for (let key in newSalary) {
		let keys = newSalary[key];
		for (let prop in keys) {
			keys[prop] *= 2;
		}
	}
}
doubleSalaries(newSalary);