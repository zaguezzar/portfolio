import express from "express"
import { getProjects, findProject } from "../controllers/projectController.js"

// initialising and using the router
const router = express.Router()
router.get("/", getProjects)
router.post("/", findProject)

export default router
