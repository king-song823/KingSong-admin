/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-11-17 15:59:33
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-17 16:23:25
 * @FilePath: /imooc-admin/src/views/article-ranking/dynamic/DynamicData.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from '@/i18n'

const t = i18n.global.t

export default () => [
  {
    label: t('msg.article.ranking'),
    prop: 'ranking'
  },
  {
    label: t('msg.article.title'),
    prop: 'title'
  },
  {
    label: t('msg.article.author'),
    prop: 'author'
  },
  {
    label: t('msg.article.publicDate'),
    prop: 'publicDate'
  },
  {
    label: t('msg.article.desc'),
    prop: 'desc'
  },
  {
    label: t('msg.article.action'),
    prop: 'action'
  }
]
