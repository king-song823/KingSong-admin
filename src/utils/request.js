/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:03:21
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-05-30 16:04:19
 * @FilePath: /imooc-admin/src/utils/request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

export default service
