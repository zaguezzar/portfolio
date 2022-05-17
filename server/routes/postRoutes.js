import express from 'express'
import getPosts from '../controllers/postController.js'

// initialising and using the router
const router = express.Router()
router.get('/', getPosts)

export default router 