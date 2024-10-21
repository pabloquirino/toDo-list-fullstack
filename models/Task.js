import { DataTypes } from "sequelize"
import conn from '../db/conn.js'

const Task = conn.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

export default Task