import mongoose from "mongoose"

const { Schema, model } = mongoose

const projectSchema = new Schema({
  image: String,
  name: String,
  description: String,
  url: String,
})

const ProjectModel = model("project", projectSchema)

export default ProjectModel
