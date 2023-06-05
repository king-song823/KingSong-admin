/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:03:21
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-06-05 22:42:35
 * @FilePath: /imooc-admin/src/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

service.interceptors.request.use((config) => {
  const { icode, time } = getTestICode()
  config.headers.codeType = time
  config.headers.icode = icode
  return config
})

// 响应器拦截
service.interceptors.response.use(
  (response) => {
    const { data, message, code } = response
    if (code === 200) {
      return data
    } else {
      ElMessage.error(message)
    }
  },
  (error) => {
    const { message } = error.response.data
    ElMessage.error(message)
    return Promise.reject(error)
  }
)

/**
 * 返回 Icode 的实现
 */
function getTestICode() {
  const now = parseInt(Date.now() / 1000)
  const code = now + 'LGD_Sunday-1991-12-30'
  return {
    icode: md5(code),
    time: now
  }
}

export default service
