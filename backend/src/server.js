const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use("/", (req, res) => {
    res.send("Hello")
})

app.listen(5000, () => console.log("Porta 5000"))