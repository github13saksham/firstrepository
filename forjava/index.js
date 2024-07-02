// let ele_input = document.getElementById("fname");
// console.log(ele_input);
// let btn = document.getElementById("click-me");
// console.log(btn);
// btn.addEventListener("click", handleSubmit);

// function handleSubmit() {
// 	let fname = ele_input.value;
// 	console.log(fname);
// 	const newItem = document.createElement("li");
// 	console.log(newItem);
// 	newItem.textContent = fname;
// 	console.log(newItem);
// 	let ul = document.getElementById("list-items");
// 	ul.appendChild(newItem);
// }

let even = 2;
let odd = 1;
function evenNumber() {
	let ul = document.getElementById("list-items");
	for (let i = 0; i <= 10; i++) {
		if (i % 2 == 0) {
			let li = document.createElement("li");
			li.textContent = i;
			ul.appendChild(li);
		}
	}
}

let evenBtn = document.getElementById("even");
evenBtn.addEventListener("click", evenNumber);

function oddNumber() {
	let ul = document.getElementById("list-item");
	for (let i = 0; i <= 10; i++) {
		if (i % 2 !== 0) {
			let li = document.createElement("li");
			li.textContent = i;
			ul.appendChild(li);
		}
	}
}
let oddBtn = document.getElementById("odd");
oddBtn.addEventListener("click", oddNumber);
