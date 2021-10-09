"use strict";
const fruits = [`Apple`, `Banana`, `Pineapple`];
fruits.push(`Orange`, `Grapes`);
fruits[1] = `Peer`;
let lastElem = fruits.pop();
console.log(lastElem);
fruits.unshift(`Watermelon`);
console.log(fruits);