const formularioProducto = document.getElementById('formularioProducto');
const formularioUsuario = document.getElementById('formularioUsuario');
const formularioProveedor = document.getElementById('formularioProveedor');
const formularioCategoria = document.getElementById('formularioCategoria');
const formularioCliente = document.getElementById('formularioCliente');
const error = document.getElementById('error');
const modalContainer = document.getElementById('modalContainer');

function closeModal() {
	modalContainer.classList.add('hide');
	window.location.href = '/admin';
}

formularioProducto?.addEventListener('submit', (e) => {
	e.preventDefault();
	const nombreProducto = e.target.nombreProducto.value;
	const descripcionProducto = e.target.descripcionProducto.value;
	const stockProducto = e.target.stockProducto.value;
	const nstockMinProducto = e.target.nstockMinProducto.value;
	const valorProducto = e.target.valorProducto.value;
	const categoriaProducto = e.target.categoriaProducto.value;
	const estadoProducto = e.target.estadoProducto.value;

	const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	const descripcionRegex = /^[a-zA-ZÀ-ÿ\s]{10,100}$/;
	const stockRegex = /^[0-9]{1,10}$/;
	const valorRegex = /^[0-9]{1,10}$/;
	try {
		if (
			nombreProducto === '' ||
			descripcionProducto === '' ||
			stockProducto === '' ||
			nstockMinProducto === '' ||
			valorProducto === '' ||
			categoriaProducto === '' ||
			estadoProducto === ''
		) {
			throw new Error('Todos los campos son obligatorios');
		}

		if (!nameRegex.test(nombreProducto)) {
			throw new Error('El nombre del producto no es valido');
		}

		if (!descripcionRegex.test(descripcionProducto)) {
			throw new Error('La descripcion del producto no es valida');
		}

		if (
			!stockRegex.test(stockProducto) ||
			!stockRegex.test(nstockMinProducto)
		) {
			throw new Error('El stock del producto no es valido');
		}

		if (!valorRegex.test(valorProducto)) {
			throw new Error('El valor del producto no es valido');
		}
		modalContainer.classList.remove('hide');
	} catch (e) {
		error.innerText = e.message;
	}
});

formularioUsuario?.addEventListener('submit', (e) => {
	e.preventDefault();
	const nombreUsuario = e.target.nombreUsuario.value;
	const telefonoUsuario = e.target.telefonoUsuario.value;
	const emailUsuario = e.target.emailUsuario.value;
	const passwordUsuario = e.target.passwordUsuario.value;
	const confirmarContrasenaUsuario = e.target.confirmarContrasenaUsuario.value;
	const rolUsuario = e.target.rolUsuario.value;

	const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
	const telefonoRegex = /^[0-9]{1,10}$/;
	const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

	try {
		if (
			nombreUsuario === '' ||
			telefonoUsuario === '' ||
			emailUsuario === '' ||
			passwordUsuario === '' ||
			confirmarContrasenaUsuario === '' ||
			rolUsuario === ''
		) {
			throw new Error('Todos los campos son obligatorios');
		}
		if (!nameRegex.test(nombreUsuario)) {
			throw new Error('El nombre del usuario no es valido');
		}
		if (!telefonoRegex.test(telefonoUsuario)) {
			throw new Error('El telefono del usuario no es valido');
		}

		if (!emailRegex.test(emailUsuario)) {
			throw new Error('El email del usuario no es valido');
		}

		if (!passwordRegex.test(passwordUsuario)) {
			throw new Error('La contraseña del usuario no es valida');
		}

		if (passwordUsuario !== confirmarContrasenaUsuario) {
			throw new Error('Las contraseñas no coinciden');
		}
		modalContainer.classList.remove('hide');
	} catch (e) {
		error.innerText = e.message;
	}
});

formularioProveedor?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nitProveedor = e.target.nitProveedor.value;
    const nombreProveedor = e.target.nombreProveedor.value;
    const correoProveedor = e.target.correoProveedor.value;
    const telefonoProveedor = e.target.telefonoProveedor.value;
    const categoriaProveedor = e.target.categoriaProveedor.value;
    const estadoProveedor = e.target.estadoProveedor.value;

    const nitRegex = /^[0-9]{1,10}$/;
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const telefonoRegex = /^[0-9]{1,10}$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    
    try{
        if(nitProveedor === '' || nombreProveedor === '' || correoProveedor === '' || telefonoProveedor === '' || categoriaProveedor === '' || estadoProveedor === ''){
            throw new Error('Todos los campos son obligatorios');
        }
        if(!nitRegex.test(nitProveedor)){
            throw new Error('El nit del proveedor no es valido');
        }
        if(!nameRegex.test(nombreProveedor)){
            throw new Error('El nombre del proveedor no es valido');
        }
        if(!telefonoRegex.test(telefonoProveedor)){
            throw new Error('El telefono del proveedor no es valido');
        }
        if(!emailRegex.test(correoProveedor)){
            throw new Error('El correo del proveedor no es valido');
        }
        modalContainer.classList.remove('hide');
    }catch(e){
        error.innerText = e.message;
    }

})

formularioCategoria?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreCategoria = e.target.nombreCategoria.value;
    const descripcionCategoria = e.target.descripcionCategoria.value;
    const estadoCategoria = e.target.estadoCategoria.value;

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const descripcionRegex = /^[a-zA-ZÀ-ÿ\s]{10,100}$/;

    try{
        if(nombreCategoria === '' || descripcionCategoria === '' || estadoCategoria === ''){
            throw new Error('Todos los campos son obligatorios');
        }
        if(!nameRegex.test(nombreCategoria)){
            throw new Error('El nombre de la categoria no es valido');
        }
        if(!descripcionRegex.test(descripcionCategoria)){
            throw new Error('La descripcion de la categoria no es valida');
        }
        modalContainer.classList.remove('hide');
    }catch(e){
        error.innerText = e.message;
    }
})

formularioCliente?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreCliente = e.target.nombreCliente.value;
    const telefonoCliente = e.target.telefonoCliente.value;
    const correoCliente = e.target.correoCliente.value;
    const direccionCliente = e.target.direccionCliente.value;

    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const telefonoRegex = /^[0-9]{1,10}$/;
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const direccionRegex = /^[a-zA-ZÀ-ÿ\s0-9\-\#]{10,100}$/;

    try{
        if(nombreCliente === '' || telefonoCliente === '' || correoCliente === '' || direccionCliente === ''){
            throw new Error('Todos los campos son obligatorios');
        }
        if(!nameRegex.test(nombreCliente)){
            throw new Error('El nombre del cliente no es valido');
        }
        if(!telefonoRegex.test(telefonoCliente)){
            throw new Error('El telefono del cliente no es valido');
        }
        if(!emailRegex.test(correoCliente)){
            throw new Error('El correo del cliente no es valido');
        }
        if(!direccionRegex.test(direccionCliente)){
            throw new Error('La direccion del cliente no es valida');
        }
        modalContainer.classList.remove('hide');
    }catch(e){
        error.innerText = e.message;
    }
})