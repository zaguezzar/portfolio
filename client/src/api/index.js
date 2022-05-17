import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchPosts = async () => axios.get(`${url}/posts`)
export const fetchProjects = async () => axios.get(`${url}/projects`)

