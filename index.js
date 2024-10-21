import express from 'express'
import { create } from 'express-handlebars'
import conn from './db/conn.js'
import Task from './models/Task.js'

const app = express()
const hbs = create({
    extname: 'handlebars'
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use(express.static('public'))

conn
    .sync()
    .then(() => app.listen(3000))
    .catch((err) => console.log(err)) 
