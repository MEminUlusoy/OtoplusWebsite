
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const main = require("./roots/main")
const bodyParser = require('body-parser')


const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/otoplus_db')


app.use(express.static('public'))


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//* main.handlebars içindeki body toplam 6 tane süslü parantez içinde olacak.


app.use("/",main)

app.listen(port, hostname, () => {
    console.log(`Server Calısıyor, http://${hostname}:${port}/`)
})


