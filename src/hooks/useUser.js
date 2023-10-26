/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-06-17 14:13:57
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-26 14:37:30
 * @FilePath: /imooc-admin/src/hooks/useUser.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ref } from 'vue'
import { getUserInfoApi } from '@/api/sys'
const userInfo = ref({})
export function useUser() {
  const setUserInfo = async () => {
    const res = await getUserInfoApi()
    userInfo.value = res.data
    return res
  }

  const clearUserInfo = () => {
    userInfo.value = {}
  }
  const getUserInfo = () => {
    return userInfo.value
  }
  return {
    setUserInfo,
    getUserInfo,
    userInfo,
    clearUserInfo
  }
}
