let openShop = document.getElementById('open-btn'),
				nameShop = document.getElementsByClassName('name-value')[0],
				budgetShop = document.getElementsByClassName('budget-value')[0],
				goodsShop = document.getElementsByClassName('goods-value')[0],
				itemsShop = document.getElementsByClassName('items-value')[0],
				employersSh = document.getElementsByClassName('employers-value')[0],
				discountSh = document.getElementsByClassName('discount-value')[0],
				isopenShop = document.getElementsByClassName('isopen-value')[0],
				goodsItem = document.getElementsByClassName('goods-item'),
				buttonGoodsItem = document.getElementsByTagName('button')[1],
				buttonOneDayBudget = document.getElementsByTagName('button')[2],
				buttonHireEmployers = document.getElementsByTagName('button')[3],
				chooseItem = document.querySelector('#items'),
				time = document.querySelector('#time'),
				budgetSh = document.querySelector('#budget'),
				hireEmployersItem = document.querySelectorAll('.hire-employers-item');

let budget,
	price;

openShop.addEventListener('click', () => {
	budget = prompt("Ваш бюджет?", "");

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt("Ваш бюджет?", "");
	}
	budgetShop.textContent = budget;
	nameShop.textContent = prompt("Название вашего магазина?", "").toUpperCase();
	let disc = confirm('Есть ли у Вас дисконтая карта?');
	if (disc == true) {
		discountSh.style.backgroundColor = 'green';
	} else {
		discountSh.style.backgroundColor = 'red';
	}
});


buttonGoodsItem.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
			goodsShop.textContent = mainList.shopGoods;
			} else {
				i--;
			}
		}
});


chooseItem.addEventListener('change', () => {
		let items = chooseItem.value;	
		if (typeof(items) === "string" && items != "" ) {
		// if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(", ");
			mainList.shopItems.sort();
			itemsShop.textContent = mainList.shopItems;
		}
});



time.addEventListener('change', () => {
	let timeSh = time.value;
	if (timeSh < 0 ) {
		console.log('Такого просто не может быть!');
		mainList.open = false;
	} else if (timeSh > 8 && timeSh < 20) {
		console.log('Время работать!');
		mainList.open = true;
		} else if (timeSh < 24) {
			mainList.open = false;
			console.log('Уже поздно!');
			} else {
				mainList.open = false;
				console.log('В сутках только 24 часа');
			};

	if(mainList.open == true) {
		isopenShop.style.backgroundColor = 'green';
	} else {
		isopenShop.style.backgroundColor = 'red';
	};
});


buttonOneDayBudget.addEventListener('click', () => {
	budgetSh.value = budget/30;
});


buttonHireEmployers.addEventListener('click', () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;

		employersSh.textContent += mainList.employers[i] + ', '; 
	}
});


let shopGoods = [];
let employers = {};
let open;

let mainList = {
	budget,
	// shopName,	
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: []/*,
	discountPrice: function discountPrice(price) {
		let disc = confirm("У вас есть дисконтная карта?");
		if (disc == true) {
			price = (price / 100) * 80;
			console.log(price);
		} else {
			console.log(price);
		}
	}*/
}




console.log(mainList);