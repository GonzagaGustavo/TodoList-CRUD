const connection = require('./../connection.js')
const route = require('express').Router()

route.post('/create', (req, res) => {
    connection.query(`INSERT INTO list(tarefa, checked) VALUES ('${req.body.tarefa}', ${req.body.checked})`, (err) => {
        if(err) {
            console.log(err)
            res.send(err)
        } else {
            res.send("Criada!")
        }
    })
})
route.get("/gete", (req, res) => {
    connection.query("SELECT * FROM list", (err, results) => {
        if(err) {
            console.log(err)
        } else {
            console.log(results)
            res.send(results)
        }
    })
})
route.post("/delete", (req, res) => {
    connection.query(`DELETE FROM list WHERE list.id = ${req.body.id}`, (err) => {
        if(err) {
            console.log(err)
        } else {
            res.send("deleted")
        }
    })
})
route.post("/edit", (req, res) => {
    connection.query(`UPDATE list SET tarefa = ${req.body.tarefa} WHERE list.id = ${req.body.id}`, (err) => {
        if(err) {
            console.log(err)
        } else {
            res.send("edited")
        }
    })
})

module.exports = route