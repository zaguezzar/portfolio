import mongoose from 'mongoose'

const { Schema, model } = mongoose 

const postSchema = new Schema({
    image: String,
    caption: String
})

const PostModel = model('post', postSchema)

export default PostModel