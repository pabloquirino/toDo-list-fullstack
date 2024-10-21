import { Sequelize } from "sequelize"

const sequelize = new Sequelize('todolist', 'root',  '',  {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
} catch(err) {
    console.log(err)
}

export default sequelize