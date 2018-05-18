const express = require('express')
const bodyParser = require('body-parser')
const logic = require('./logic')

// const port = process.argv[2]
const port = 3000

const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // middleware

const tasks = []
const dones = []
let id = 0

app.get('/', (req, res) => {
    res.send(`${renderfun()}`)
})

app.post('/add-done/:id', (req, res) => {
    const { body: { task } } = req
    tasks.push(task)
    res.send(`${renderfun()}`)
})

app.post(`/remove-done/:id`, (req, res) => {
    let id = req.params.id
    dones.push(tasks[id])
    tasks.splice(id, 1)
    res.send(`${renderfun()}`)
})

renderfun = () => {
    const listToDo = []
    const listDone = []
    let rendering = ''

    if(tasks && tasks.length){
        for(let i = 0; i < tasks.length; i++){
            listToDo.push(`<form action="/add-done/${id}" method="POST">
            ${tasks[i]}<button type="submit">done</button></form>`)
        }
        rendering += `<h3>TO DO</h3>\n${listToDo.join("")}`
    }

    if(dones && dones.length){
        for (let n = 0; n < dones.length; n++) {
            listDones.push(`<form action="/remove-done/${n}" method="POST">
            ${dones[n]}<button type="submit">X</button></form>`)
        }
        rendering += `<h3>DONE</h3>\n${listDone.join("")}`
    }
    
    return(`<html>
            <head>
                <title>Notes App</title>
            </head>
            <body>
                <form action="/add-task" method="POST">
                    <textarea name="note" placeholder="write a taks"></textarea>
                    <button type="submit">keep</button>
                </form>
                ${rendering}
            </body>
        </html>`)

}

app.listen(port, () => console.log(`server running on port ${port}`))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})