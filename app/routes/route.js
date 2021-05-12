module.exports = (app) => {

const users = require('../controllers/UsersController.js');
const homde = require('../controllers/HomeController.js');

const product = require('../controllers/ProductController.js');

/*
// define a simple route
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about-us', (req, res) => {
    res.render('about');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/register', (req, res) => {

	console.log(req.body);
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('sign_up');
});
*/

app.get('/', homde.index);

app.get('/about-us', (req, res) => {
    res.render('about');
});

app.get('/login', users.login);

app.post('/login', users.authorize);

app.get('/register', users.index);

app.post('/register',users.store);

app.get('/users', users.findAll);

//router.get('/logout', users.logout);
//Product Route
app.post('/store',product.store);
app.get('/products',product.index);
app.get('/delete/:id',product.destroy);




}
