import { modal } from "./../modal/modal";

const signInButton = document.querySelector('.user-block__link_sign-in');
const loginForm = document.querySelector('.login-form');
const login = loginForm.querySelector('[name=login]');
const password = loginForm.querySelector('[name=password]');
const storageLogin = localStorage.getItem('login');


signInButton.onclick = function(e) {
	
	e.preventDefault();
	modal.start('.login-form');
	
	if (storageLogin) {
		login.value = storageLogin;
		password.focus();
	} else {
		login.focus();
	}

}


loginForm.onsubmit = function(e) {
	
	if (!login.value || !password.value) {
		
		e.preventDefault();
		loginForm.classList.add('login-form_validation_error');
		setTimeout(function() {
			if (!login.value) {
				login.style.border = '4px solid red'
			} else if (!password.value && login.value) {
				login.style.border = ''
				password.style.border = '4px solid red'
			}
			loginForm.classList.remove('login-form_validation_error');
		}, 300);
		
	
	} else {
		
		localStorage.setItem('login', login.value);
		login.style.border = ''
		password.style.border = ''
	}

}