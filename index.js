const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://aalicen44:tummypocket10@db-shoppingmall.taznv8f.mongodb.net/?retryWrites=true&w=majority&appName=DB-ShoppingMall')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!'`))