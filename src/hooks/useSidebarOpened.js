/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-06-28 16:18:06
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-28 16:21:58
 * @FilePath: /imooc-admin/src/hooks/useSidebarOpened.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'
const sidebarOpened = ref(true)
export const useSidebarOpened = () => {
  const setSidebarOpened = () => {
    sidebarOpened.value = !sidebarOpened.value
  }

  return {
    setSidebarOpened,
    sidebarOpened
  }
}
