import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Moamen-alghareeb/real-world-vue',
  timeout: 5000,
  withCredentials: false,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEventById(id) {
    return apiClient.get('/events/' + id)
  },
}
