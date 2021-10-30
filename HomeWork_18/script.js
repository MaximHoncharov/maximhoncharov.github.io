"use strict";

const table = document.querySelector('table');
const headings = [...table.rows];
function sortTable(columnIndex) {
	const values = headings
		.slice(1)
		.sort((rowA, rowB) => rowA.cells[columnIndex].innerHTML > rowB.cells[columnIndex].innerHTML ? 1 : -1);
	table.tBodies[0].append(...values);
}
sortTable();
