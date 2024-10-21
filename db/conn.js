import { Sequelize } from "sequelize"

const sequelize = Sequelize('nodemvc', 'root',  '',  {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
} catch(err) {
    console.log(err)
}

export default sequelize