/*let arr = [[1, 2, 3, 4], [5, 6, 7, 8]];
// console.log(arr);
let sum = 0
for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr[i].length; j++) {

		sum = sum + arr[i][j];
	}
}
console.log(sum);
*/


		// console.log(arr[j]);
/*function mas() {
	let masNumber = +prompt("Сколько должно быть массивов?", "1");
	let arr = arr.length(masNumber);
	console.log(arr);
}*/

let arr = [];

function musNumber(number) {
	arr.length = number;
	console.log(arr);


	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		let j = Math.random(5);
		arr[number].length = j;
		for (var n = 0; n < arr[i].length; n++) {
			arr[number][j] = Math.random(5);
			sum = sum + arr[i][n];
		}
	}
	console.log(sum);
	console.log(arr);
}
// musNumber(2);

console.log('How much arrays include in array?');
let arrays = 5;
let array = [];
for(let i=0; i<arrays;i++){
	array.push([Math.floor(Math.random()*6)]);
}

let sum = 0;
array.forEach(element => {
	sum += Number(element);
});

console.log(array);
console.log(sum);