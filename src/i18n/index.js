/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-07-07 21:35:47
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-06 13:55:57
 * @FilePath: /imooc-admin/src/i18n/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from 'vue-i18n'
import { useLanguage } from '@/hooks/useLanguage'

import messages from './message'
const { getLanguage } = useLanguage()
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})
export default i18n
