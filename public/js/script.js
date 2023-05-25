const loginButton = document.getElementById('loginButton');
const modalContainer = document.getElementById('modalContainer');
const formulario = document.getElementById('formulario');

loginButton.addEventListener('click', () => {
	modalContainer.classList.remove('hide');
});

function closeModal() {
	modalContainer.classList.add('hide');
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	const emailExpReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const passWordExpReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
	const email = e.target.email.value;
	const password = e.target.password.value;
	console.log(email);
	console.log(password);

	try {
		if (email === '' || password === ''){
			throw new Error('Todos los campos son obligatorios');
        }
		if (!emailExpReg.test(email)) {
			throw new Error('El email no es válido');
		}
		if (!passWordExpReg.test(password)) {
			throw new Error('La contraseña no es válida');
		}
		window.location.href = '/admin';
	} catch (error) {
		document.getElementById('error').innerHTML = error.message;
	}
});
