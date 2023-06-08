/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-06-06 17:58:40
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-06-06 18:08:11
 * @FilePath: /imooc-admin/src/hooks/useTimeStap.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TIME_OUT_VALUE, TIME_STAMP } from '../constant'
import { setItem, getItem } from '../utils/storage'
export const useTimeStap = () => {
  // 获取时间戳
  const getTimeStamp = () => {
    return getItem(TIME_STAMP)
  }
  // 设置时间戳
  const setTimeStamp = () => {
    setItem(TIME_STAMP, Date.now())
  }
  // 判断时间戳是否过期
  const isTimeOut = () => {
    return Date.now() - getTimeStamp() > TIME_OUT_VALUE
  }
  return {
    getTimeStamp,
    setTimeStamp,
    isTimeOut
  }
}
