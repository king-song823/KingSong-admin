/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-06-06 14:12:14
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-06-06 14:23:45
 * @FilePath: /imooc-admin/permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './router'
import { getItem } from './utils/storage'
// 白名单
const whiteList = ['/login']

console.log('router', router, whiteList)

router.beforeEach(async (to, from, next) => {
  // 存在token，直接跳转
  if (getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  }
  // 不存在token
  else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
