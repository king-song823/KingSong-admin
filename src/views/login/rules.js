/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 15:02:57
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-26 11:20:32
 * @FilePath: /imooc-admin/src/views/login/rules.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from '@/i18n'
export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      callback()
    }
  }
}
export const validateUserName = () => {
  return (rule, value, callback) => {
    if (!value) {
      callback(new Error(i18n.global.t('msg.login.usernameRule')))
    }
    if (value.length < 4) {
      callback(new Error(i18n.global.t('msg.login.userNameLess6')))
    } else {
      callback()
    }
  }
}
