/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-16 16:30:52
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-16 16:31:07
 * @FilePath: /imooc-admin3/src/api/roles.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
 */
import request from '@/utils/request'

/**
 * 获取所有角色
 */
export const roleList = () => {
  return request({
    url: '/role/list'
  })
}
