import express from 'express'
import TaskController from '../controllers/TaskController.js'

const router = express.Router()

router.get('/', TaskController.showTasks)

export default router