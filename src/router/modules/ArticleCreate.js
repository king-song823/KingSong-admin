/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-25 17:48:00
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-25 17:48:42
 * @FilePath: /imooc-admin3/src/router/modules/ArticleCreate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import layout from '@/layout'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleCreate',
  meta: { title: 'article', icon: 'article' },
  children: [
    {
      path: '/article/create',
      component: () => import('@/views/article-create/index'),
      meta: {
        title: 'articleCreate',
        icon: 'article-create'
      }
    },
    {
      path: '/article/editor/:id',
      component: () => import('@/views/article-create/index'),
      meta: {
        title: 'articleEditor'
      }
    }
  ]
}
