
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const main = require("./roots/main")



app.use(express.static('public'))


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


//* main.handlebars içindeki body toplam 6 tane süslü parantez içinde olacak.

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/test2_db')

app.use("/",main)

app.listen(port, hostname, () => {
    console.log(`Server Calısıyor, http://${hostname}:${port}/`)
})


