const express = require('express');
const app = express();
const PORT = 5500;
const chalk = require('chalk');

app.use(require('./routes/addForms'));

app.listen(PORT, ()=>{
    console.log(chalk.green(`Serwer wystartował na ${PORT}`));
})

app.get('/test', (req, res)=>{
    res.sendStatus(200);
})