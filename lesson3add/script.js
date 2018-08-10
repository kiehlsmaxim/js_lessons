let str = "урок-3-был слишком легким";
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);
str = str.replace(/-/g, ' ');
console.log(str);
str = str.slice(0, -2) + 'оо';
console.log(str);


let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;

for (let i = 0; i < 6; i++) {
	if (typeof(arr[i]) === 'number') {
		sum = sum + Math.pow(arr[i], 3);
	}
}
sum = Math.sqrt(sum);


	console.log(sum);
/*
while (i < 6) {
	sum = Math.pow(kol, 3);
	console.log(sum);

	num = num + sum;
	i++;
	console.log(num);
}
let lum = Math.sqrt(num);
	console.log(lum);*/





/*for (var i = 0; i < 6; i++) {
	if (arr[i] === 'number') {
		sum = sum + Math.pow(arr[i], 3);
	};
}*/
/*let i = 0;

while (i < 6) {
	let pow = arr[i];
	if (pow === 'number') {
		sum = sum + Math.pow(pow, 3);
		console.log(sum);
		i++;
	} else {
		i++;
	};
}*/


// sum = Math.sqrt(sum);
// console.log(sum);