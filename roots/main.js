const express = require("express")
const router = express.Router()
const Car = require("../models/Car")


router.get('/', (req,res)=>{
    res.render('site/home');
})

router.get('/carlist', (req,res)=>{
    res.render('site/carlist');
})

router.get('/login', (req,res)=>{
    res.render('site/login');
})
router.get('/register', (req,res)=>{
    res.render('site/register');
})

router.get('/sell', (req,res)=>{
    res.render('site/sell');
})

router.post('/sell' , (req , res)=> {
    Car.create(req.body)
    res.redirect('/')
})

router.get('/cardetails', (req,res) => {
    res.render('site/cardetails')
})



module.exports = router