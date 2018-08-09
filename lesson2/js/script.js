let budget = +prompt("Ваш бюджет?");
let shopName = prompt("Название вашего магазина?");
let shopGoods = [];
let employers = {};
let open;
let time = 19;
let mainList = {
	budget,
	shopName,
	shopGoods: [],
	employers: {},
	open: false
}



/***************** Цикл с do while ************/
/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Все не верно');
	}
	i++;
}
while (i < 3);*/



/***************** Цикл с while ************/
/*let i = 0;
while (i < 3) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Все не верно');
	}
	i++;
}*/




/***************** Цикл с for ************/
for (let i = 0; i < 3; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		console.log('Все не верно');
	}
}



if (time < 0 ) {
	console.log('Такого просто не может быть!');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже поздно!');
		} else {
			console.log('В сутках только 24 часа');
		};


let budget1day = alert( "Бюджет за 1 день равен: " + budget/30 );

console.log(mainList);