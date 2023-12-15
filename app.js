
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('public'))


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


//* main.handlebars içindeki body toplam 6 tane süslü parantez içinde olacak.
app.get('/', (req,res)=>{
    res.render('site/home');
})

app.get('/carlist', (req,res)=>{
    res.render('site/carlist');
})

app.get('/login', (req,res)=>{
    res.render('site/login');
})
app.get('/register', (req,res)=>{
    res.render('site/register');
})

app.get('/sell', (req,res)=>{
    res.render('site/sell');
})



app.listen(port, hostname, () => {
    console.log(`Server Calısıyor, http://${hostname}:${port}/`)
})