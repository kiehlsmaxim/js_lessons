let arr = [1, 2, 3, 4, 5];

arr.pop();



console.log(arr);



/*********** Все об объектах **************/
let options = {
	name: "test",
	width: 1024,
	height: 1024
}

options.bool = false;
options.colors = {
	border: "black",
	background: "red"
}

delete options.bool;

for ( let key in options) {
	console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);