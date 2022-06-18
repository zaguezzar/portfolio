import axios from "axios"

const url = "http://localhost:5000"

export const fetchPosts = (_) => axios.get(`${url}/posts`)

export const fetchProjects = (_) => axios.get(`${url}/projects`)

export const fetchProject = (projectId) =>
  axios.post(`${url}/projects`, { projectId })
