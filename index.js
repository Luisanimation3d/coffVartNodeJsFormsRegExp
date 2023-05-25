require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

app.use(express.static('public'));

app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/public/views/partials'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/admin', (req, res) => {
	res.render('admin');
});

app.get('/admin/products', (req, res) => {
	res.render('products');
});

app.get('/admin/products/create', (req, res) => {
	res.render('crear_product');
});

app.get('/admin/users', (req, res) => {
	res.render('users');
});

app.get('/admin/users/create', (req, res) => {
	res.render('usersCreate');
});

app.get('/admin/providers', (req, res) => {
	res.render('providers');
});

app.get('/admin/providers/create', (req, res) => {
	res.render('providersCreate');
});

app.get('/admin/categories', (req, res) => {
	res.render('categories');
});

app.get('/admin/categories/create', (req, res) => {
	res.render('categoriesCreate');
});

app.get('/admin/client', (req, res) => {
    res.render('clients');
});

app.get('/admin/client/create', (req, res) => {
	res.render('clientCreate');
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
