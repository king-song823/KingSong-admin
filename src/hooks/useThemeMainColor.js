/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-07-25 21:23:12
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-07-25 22:59:01
 * @FilePath: /imooc-admin/src/hooks/useThemeColor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getItem, setItem } from '@/utils/storage'
import { ref } from 'vue'
import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
const mainColor = ref(getItem(MAIN_COLOR) || DEFAULT_COLOR)
export const useThemeColor = () => {
  const getThemeColor = () => {
    const color = getItem(MAIN_COLOR)
    return color || DEFAULT_COLOR
  }
  const setThemeColor = (color) => {
    mainColor.value = color
    setItem(MAIN_COLOR, color)
  }
  return {
    getThemeColor,
    setThemeColor,
    mainColor
  }
}
