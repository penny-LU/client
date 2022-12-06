import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: process.env.API_ROOT,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': 'https://demo20221130.azurewebsites.net'
    },
    withCredentials: true
  })
}
