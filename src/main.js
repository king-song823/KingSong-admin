/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-05-16 22:02:24
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-12 17:41:42
 * @FilePath: /imooc-admin/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import installIcons from '@/icons'
import installElementPlus from './plugins/element'
import './permission'
import i18n from './i18n'
// filter
import installFilter from './filter'

const app = createApp(App)
installFilter(app)
installElementPlus(app)
installIcons(app)
app.use(i18n).use(router).mount('#app')
