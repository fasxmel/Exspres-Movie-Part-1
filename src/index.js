const express = require('express');
const app = express();
const PORT = 5050;

const routes = require('./routes');

const configExpress = require('./config/configExpress');
const configHandlebars = require('./config/configHandlebars');

configExpress(app);
configHandlebars(app);



app.use(routes);

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));