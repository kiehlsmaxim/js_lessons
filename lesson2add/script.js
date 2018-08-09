let week = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

let date = new Date();

let i = 0;
while (i < 7) {
	if (i == 0 || i == 6) {
		document.write(week[i].bold() + '</br>');
	} else if (i == date.getDay()) {
		document.write(week[i].italics() + '</br>');
	} else {
		document.write(week[i] + '</br>');
	};
	i++;
}


document.write('</br></br></br>');
let arr = [];
let j = 0;
while (j < 7) {
	var a = prompt("Введите число");
	if (a.charAt(0) == "3" || a.charAt(0) == "7") {
		document.write(a.italics() + ' ');
	}
	arr[j] = a;
	j++;
}