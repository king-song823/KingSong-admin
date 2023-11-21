/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-06-06 14:12:14
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-21 11:28:44
 * @FilePath: /imooc-admin/permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './router'
import { useToken } from './hooks/useToken'
import { useUser } from './hooks/useUser'

// 白名单
const whiteList = ['/login']
const { getToken } = useToken()
const { setUserInfo } = useUser()
import { usePermission } from './hooks/usePermission'
router.beforeEach(async (to, from, next) => {
  // 存在token，直接跳转
  // console.log('to.path', getToken())
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const { data } = await setUserInfo()
      const permission = data?.permission?.menus
      const { filterRoutes } = usePermission()
      const filterRoutesList = filterRoutes(permission)
      filterRoutesList.forEach((item) => {
        router.addRoute(item)
      })
      console.log('后端返回的数据', filterRoutesList, to.path)

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
