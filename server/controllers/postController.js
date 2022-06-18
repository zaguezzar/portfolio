import PostModel from "../models/PostModel.js"

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find()
    res.status(200).json(posts)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
