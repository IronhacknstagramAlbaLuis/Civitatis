import axios from 'axios'
const http = axios.create({ baseURL: process.env.REACT_APP_BASE_API_URL || 'http://localhost:3002/api/v1'})
export default http