import axios from 'axios'
const myAxios = axios.create()
myAxios.defaults.timeout = 60000 // 请求的超时时间
myAxios.defaults.baseURL = 'https://test.5itrade.cn'
myAxios.defaults.headers.common = {
  'ssoToken': window.localStorage.getItem('token') || '',
  'X-Requested-With': 'XMLHttpReques'
}
myAxios.interceptors.request.use(config => {
  let data = JSON.parse(JSON.stringify(config.data))
  // 在发送请求之前做些什么
  config.data = {}
  config.data.sysId = 'CCBA'
  config.data.appWebFlag = '1'
  config.data.reqData = data
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default ({app}, inject) => {
  app.axios = myAxios
}
