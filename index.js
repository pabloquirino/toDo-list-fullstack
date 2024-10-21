import express from 'express'
import { create } from 'express-handlebars'

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

app.listen(3000)