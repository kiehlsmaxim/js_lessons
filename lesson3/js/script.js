let budget,
	shopName,
	time,
	price



let shopGoods = [];
let employers = {};
let open;

let mainList = {
	budget,
	shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false
}

function start() {
	budget = prompt("Ваш бюджет?");

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt("Ваш бюджет?");
	}

	shopName = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}
start();


function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
		} else {
			i--;
		}
	}
}
chooseGoods();


function workTime(time) {
	if (time < 0 ) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже поздно!');
			} else {
				console.log('В сутках только 24 часа');
			};
}
workTime(18);




/************** Записывает номер и имя сотрудника***************8*/
let y = 1 //id сотрудника
function employersShop() {
	for (let x = 0; x < 4; x++) {
		employersName = prompt('Напишите номер '+ y + ' сотрудника');
		employersTel = prompt('Напишите имя '+ y + ' сотрудника');
		y++;
		employers[x] = employersName + ' - ' + employersTel;
	}
}
employersShop();
console.log(employers);





function discountPrice(price) {
	let disc = confirm("У вас есть дисконтная карта?");
	if (disc == true) {
		price = price * 0.8;
		console.log(price);
	} else {
		console.log(price);
	}
}
discountPrice(100);

let budget1day = alert( "Бюджет за 1 день равен: " + budget/30 );

console.log(mainList);