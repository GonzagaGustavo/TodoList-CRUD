const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const DB = require('./connection.js')
const route = require('./Routes/crud.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.get("/", (req, res) => {
    res.send("Hello")
})
app.use(route)

app.listen(5000, () => console.log("Porta 5000"))