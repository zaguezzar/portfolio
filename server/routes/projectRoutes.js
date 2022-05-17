import express from 'express'
import getProjects from '../controllers/projectController.js'

// initialising and using the router
const router = express.Router()
router.get('/', getProjects)

export default router 