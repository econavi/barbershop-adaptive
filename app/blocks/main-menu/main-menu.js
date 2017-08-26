// мобильное меню
const menu = document.querySelector('.main-menu');
const toggle = document.querySelector('.main-menu__toggle');

menu.classList.remove('main-menu_nojs');

toggle.addEventListener('click', function() {
	menu.classList.toggle('main-menu_opened');
	menu.classList.toggle('main-menu_closed');
});

// // заменяем адреса ссылок для gitHubPages и добавляем класс на активную ссылку для стилизации
// const path = window.location.pathname;
// const links = document.querySelectorAll('.main-menu__link');
// const gitHubPagesPath = path.indexOf('catalog/barbershop');

// for(let i = 0; i < links.length; i++) {

// 	const link = links[i];
// 	var href = link.getAttribute('href');

// // .indexOf() - проверяет наличие символов и возвращает true или -1
// 	const linkPageLev1 = href.indexOf('..');
// 	const linkPageLev2 = href.indexOf('../..');

// 	if(linkPageLev1 != -1 && linkPageLev2 == -1) {
//		// .substring() - возвращает обрезанную строку
// 		href = href.substring(2);
// 	}
// 	else if(linkPageLev2 != -1) {
// 		href = href.substring(5);
// 	}

// 	if(gitHubPagesPath != -1) {
// 		href = '/catalog/barbershop' + href;
// 	}
//  // тут добавляем класс для активной ссылки 
// 	if(href === path) {
// 		link.classList.add('main-menu__link_active');
// 	}
// }