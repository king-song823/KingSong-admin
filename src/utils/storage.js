/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-06-05 17:07:18
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-06-05 17:16:05
 * @FilePath: /imooc-admin/src/utils/storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 存储对象

export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }

  window.localStorage.setItem(key, value)
}

// 获取对象
export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (error) {
    return value
  }
}

// 删除对象
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

// 清空对象
export const clearAllItem = () => {
  window.localStorage.clear()
}
