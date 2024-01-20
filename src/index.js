const express = require('express');
const app = express();
const PORT = 5050;

app.get('/', (req, res) => {
    res.send('Home Page')
});

app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));