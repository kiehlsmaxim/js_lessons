let budget = +prompt("Ваш бюджет?");
let shopName = prompt("Название вашего магазина?");
let shopGoods = [];
let employers = {};
let open;
let mainList = {
	budget,
	shopName,
	shopGoods: [],
	employers: {},
	open: false
}
shopGoods.push(prompt("Какой тип товаров будем продавать?"));
shopGoods.push(prompt("Какой тип товаров будем продавать?"));
shopGoods.push(prompt("Какой тип товаров будем продавать?"));
let budget1day = alert( "Бюджет за 1 день равен: " + budget/30 );