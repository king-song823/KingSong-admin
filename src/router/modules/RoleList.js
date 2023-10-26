/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-25 17:46:04
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-25 17:46:18
 * @FilePath: /imooc-admin3/src/router/modules/UserManage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'userManage',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/manage',
      component: () => import('@/views/user-manage/index'),
      meta: {
        title: 'userManage',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/user/info/:id',
      name: 'userInfo',
      component: () => import('@/views/user-info/index'),
      props: true,
      meta: {
        title: 'userInfo'
      }
    },
    {
      path: '/user/import',
      name: 'import',
      component: () => import('@/views/import/index'),
      meta: {
        title: 'excelImport'
      }
    }
  ]
}
