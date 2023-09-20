import axios from "axios"

const API_BASE_URL = "https://your-api.com"
const authServise = {
  async login(credentials) {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials)
      return response.data
    } catch (error) {
      throw error
    }
  },
  async logout() {
    try {
      console.log('111')
    } catch (error) {
      throw error
    }
  }
}
export default authServise
