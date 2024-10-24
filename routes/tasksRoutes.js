import express from 'express'
import TaskController from '../controllers/TaskController.js'

const router = express.Router()

router.post('/add', TaskController.createTasksSave)
router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)

export default router