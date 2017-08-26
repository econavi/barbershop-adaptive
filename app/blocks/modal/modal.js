function Popup(options) {
	this.modal = document.querySelector(options.modal);
	this.overlay = document.querySelector(options.overlay);
	this.closeBtn = document.querySelector(options.closeBtn);

	var openedElem;
	var popup = this;

	this.start = function(elem) {
		this.open(elem);
		openedElem = elem;
	}

	this.open = function(elem) {
		popup.modal.classList.add('modal_open');
		document.querySelector(elem).style.display = 'block'
		window.scrollTo(0, 0)
		window.onkeydown = function(event) {
			if(event.keyCode === 27) { // if press ESC
				popup.close();
			}
			window.onkeydown = null;
		}
	}

	this.close = function() {
		document.querySelector(openedElem).style.display = 'none'
		popup.modal.classList.remove('modal_open');
	}

	this.overlay.onclick = popup.close;
	this.closeBtn.onclick = function(event) {
		event.preventDefault();
		popup.close();
	}
}

var modal = new Popup({
	modal: '.modal',
	overlay: '.modal__blur',
	closeBtn: '.modal__close-btn'
});

export { modal };

/* 

Работа с модальным окном.

1. Импортируем переменную modal в нужный блок.
   
   Пример:
	import { modal } from './../modal/modal'


2. Настроив событие, вызываем функцию - modal(#elem#)
   
   #elem# - css-селектор элемента, 
   контент которого будет отображен в модальном окне.

   Пример:	
	const mapLink = document.querySelector('.footer__map-link');

	mapLink.onclick = (e) => {
		modal.start('.map')
	}	

   По умолчанию, у элемента в стилях, 
   должено быть указано свойство - display, со значением - none

*/
