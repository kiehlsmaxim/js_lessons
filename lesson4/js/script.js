let budget,
	shopName,
	time,
	price

	function start() {
		budget = prompt("Ваш бюджет?", "");

		while (isNaN(budget) || budget == '' || budget == null) {
			budget = prompt("Ваш бюджет?", "");
		}

		shopName = prompt("Название вашего магазина?", "").toUpperCase();
		time = 19;
	}
	start();


let shopGoods = [];
let employers = {};
let open;

let mainList = {
	budget,
	shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
			} else {
				i--;
			}
		}
	},
	workTime: function workTime(time) {
	if (time < 0 ) {
		console.log('Такого просто не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if (time < 24) {
			console.log('Уже поздно!');
			} else {
				console.log('В сутках только 24 часа');
			};
	},
	dayBudget: function dayBudget() {
		alert( "Бюджет за 1 день равен: " + budget/30 );
	},
	discountPrice: function discountPrice(price) {
		let disc = confirm("У вас есть дисконтная карта?");
		if (disc == true) {
			price = (price / 100) * 80;
			console.log(price);
		} else {
			console.log(price);
		}
	},
	employersShop: function employersShop() {
		let y = 1 //id сотрудника
		for (let x = 0; x < 4; x++) {
			employersName = prompt('Напишите номер '+ y + ' сотрудника');
			employersTel = prompt('Напишите имя '+ y + ' сотрудника');
			y++;
			employers[x] = employersName + ' - ' + employersTel;
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через запятую товары", "");
			if (typeof(items) === "string" && items != null && items != "" ) {
				mainList.shopItems = items.split(",");
			} else {
				i--;
			}
		}
		mainList.shopItems.push(prompt("Подождите, еще ", ""));
		mainList.shopItems.sort();
	},
	list: function list(){
	document.write("У нас вы можете купить: <br><br>");
	mainList.shopItems.forEach(function(item, i, arr) {
		document.write((++i) + '. ' + item + '<br>');
	})
		console.log('Наш магазин включает в себя: ')
		for (let items in mainList.shopItems) {
		  console.log(mainList.shopItems[items]);
		}
	}
}




console.log(mainList);