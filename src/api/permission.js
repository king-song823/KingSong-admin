/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-16 16:52:45
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-16 16:53:59
 * @FilePath: /imooc-admin3/src/api/permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import request from '@/utils/request'

/**
 * 获取所有权限
 */
export const permissionList = () => {
  return request({
    url: '/permission/list'
  })
}
