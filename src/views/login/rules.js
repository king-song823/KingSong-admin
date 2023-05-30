/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 15:02:57
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-05-30 15:03:08
 * @FilePath: /imooc-admin/src/views/login/rules.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
