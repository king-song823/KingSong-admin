/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:03:21
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-26 10:36:10
 * @FilePath: /imooc-admin/src/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
import md5 from 'md5'
import { ElMessage } from 'element-plus'
import { useTimeStap } from '@/hooks/useTimeStap'
import { useLogin } from '../hooks/useLogin'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000
})

import { useToken } from '@/hooks/useToken'
const { getToken } = useToken()
const { isTimeOut } = useTimeStap()
const { logout } = useLogin()

service.interceptors.request.use((config) => {
  const { icode, time } = getTestICode()
  config.headers.codeType = time
  config.headers.icode = icode
  // 当含有token，就携带token
  console.log('-----', getToken())
  if (getToken()) {
    console.log('isTimeOut()', isTimeOut())
    if (isTimeOut()) {
      logout()

      // 如果过期了，就清除token
      ElMessage.error('token过期了，请重新登录')
      return Promise.reject(new Error('token过期了，请重新登录'))
    }
    config.headers.Authorization = `Bearer ${getToken()}`
  }
  return config
})

// 响应器拦截
service.interceptors.response.use(
  (response) => {
    const { data } = response
    if (data.code === 200) {
      return data
    } else {
      ElMessage.error(data.message)
    }
  },
  (error) => {
    const { message, code } = error.response.data
    if (code === 401) {
      logout()
    }
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
