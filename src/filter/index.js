/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-09-12 15:47:14
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-12 15:47:26
 * @FilePath: /imooc-admin 2/src/filter/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs'

const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
