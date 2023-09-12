/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-06-05 17:17:47
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-09-11 00:11:35
 * @FilePath: /imooc-admin/src/hooks/useToken.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { setItem, getItem, clearAllItem } from '../utils/storage'
import { TOKEN } from '../constant'

export const useToken = () => {
  const setToken = (token) => {
    setItem(TOKEN, token)
  }
  const getToken = () => {
    return getItem(TOKEN)
  }
  return {
    setToken,
    getToken,
    clearAllItem
  }
}
