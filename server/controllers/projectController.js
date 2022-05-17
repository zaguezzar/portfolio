import ProjectModel from '../models/projectModel.js'

const getProjects = async (req, res) => { 
    try { 
        const projects = await ProjectModel.find()
        res.status(200).json(projects)
    } catch (err) { 
        res.status(404).json({ message: err.message })
    }
}

export default getProjects