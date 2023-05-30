/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:07:04
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-05-30 16:08:55
 * @FilePath: /imooc-admin/src/api/sys.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export const login = (data) => {
  return request({
    url: `/sys/login`,
    method: 'post',
    data
  })
}
