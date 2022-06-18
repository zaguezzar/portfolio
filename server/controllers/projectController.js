import ProjectModel from "../models/ProjectModel.js"

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find()
    res.status(200).json(projects)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

export const findProject = async (req, res) => {
  const id = req.body.projectId
  try {
    const project = await ProjectModel.find({ _id: id })
    res.status(200).json(project)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
