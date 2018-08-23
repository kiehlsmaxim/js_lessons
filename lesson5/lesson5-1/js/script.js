let	newLi = document.createElement('li'),
				title = document.getElementById('title'),
				myul = document.getElementsByTagName('ul')[0],
				secondLi = document.getElementsByClassName('menu-item')[2],
				thirdLi = document.getElementsByClassName('menu-item')[1];
newLi.textContent = 'Пятый пункт';
newLi.classList.add('menu-item');
myul.appendChild(newLi);
myul.insertBefore(secondLi, thirdLi);
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";



//  Удаление блока

let adv = document.getElementsByClassName('adv')[0];
let column = document.getElementsByClassName('column')[1];

column.removeChild(adv);

// Добавление текста в блок

let textBlock = prompt('Напиши текст', '');
let block = document.getElementById('prompt');

block.textContent = textBlock;

// Изменение текста

let titlewe = document.getElementById('title');
titlewe.textContent = 'Мы продаем только подлинную технику Apple'
// titlewe = titlewe.replace(/ /, '-');
