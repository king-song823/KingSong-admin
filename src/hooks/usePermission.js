/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-25 14:14:30
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-21 16:39:41
 * @FilePath: /imooc-admin3/src/hooks/usePermission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { publicRoutes, privateRoutes } from '../router/index'
import { ref } from 'vue'
import { useUser } from '@/hooks/useUser'
import router from '../router'
const routeList = ref([])
export function usePermission() {
  const setRoute = (role) => {
    routeList.value = [...publicRoutes, ...filterRoutes(role)]
  }
  const filterRoutes = (permissionList) => {
    const route = []
    permissionList?.forEach((item) => {
      route.push(...privateRoutes.filter((route) => route.name === item))
    })
    setRoute()
    return route
  }

  const resetRouter = () => {
    const { userInfo } = useUser()
    if (userInfo.value && userInfo.value?.permission) {
      userInfo.value?.permission.menus?.forEach((menu) => {
        router.removeRoute(menu)
      })
    }
  }
  return {
    routeList,
    setRoute,
    filterRoutes,
    resetRouter
  }
}
