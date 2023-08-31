/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-08-26 18:19:38
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-08-26 18:49:19
 * @FilePath: /imooc-admin/src/utils/tags.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const whiteList = ['/login', '/import', '/404', '/401']

/**
 * path 是否需要被缓存
 * @param {*} path
 * @returns
 */
export function isTags(path) {
  return !whiteList.includes(path)
}
