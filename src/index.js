const express = require('express');
const app = express();
const PORT = 5050;
const handlebars = require('express-handlebars');
const path = require('path');

const routes = require('./routes');

app.engine('hbs', handlebars.engine({ 
    extname: 'hbs',
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));