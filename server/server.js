import express from 'express' 
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import postRoutes from './routes/postRoutes.js'
import projectRoutes from './routes/projectRoutes.js'

import 'dotenv/config'

// initialising the app 
const app = express()

// binding cors
app.use(cors())

// binding middleware to parse data 
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(bodyParser.json({ limit: '10mb', extended: true }))

// routing 
app.use('/posts', postRoutes)
app.use('/projects', projectRoutes)

// destructuring the env object
const { PORT, DB_URL } = process.env

// connecting to the database
const CONNECTION_URL = `${DB_URL}/portfolio`
const CONNECTION_PORT = PORT | 5000
const OPTIONS = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose
  .connect(CONNECTION_URL, OPTIONS)
  .then(() => app.listen(CONNECTION_PORT, () => console.log(`Server running on port ${CONNECTION_PORT}...`)))
  .catch(err => console.log(err.message))


