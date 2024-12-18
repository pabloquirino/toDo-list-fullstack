import express from 'express'
import TaskController from '../controllers/TaskController.js'

const router = express.Router()

router.post('/updatestatus', TaskController.toggleTaskStatus)
router.post('/remove', TaskController.removeTask)
router.post('/edit', TaskController.updateTaskPost)
router.get('/edit/:id', TaskController.updateTask)
router.post('/add', TaskController.createTasksSave)
router.get('/add', TaskController.createTask)
router.get('/', TaskController.showTasks)

export default router