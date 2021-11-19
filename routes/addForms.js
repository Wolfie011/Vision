const express = require('express');
const router = express();
const handlebars = require('express-handlebars');
const addForm = require('../model/addForm');
const {db} = require('../model/addForm');
const mongoose = require('mongoose');

router.set('view engine', 'ejs')

router.get('/dashboard/teamy', (req, res) => {
    db.collection('posts').find({}).toArray()
    .then(results => {
        res.render('index.ejs', {teamdata: results})
    })
    .catch(error => console.error(error))
    
})

router.get('/dashboard', (req, res) =>{
    res.sendStatus(200)
})


module.exports = router;