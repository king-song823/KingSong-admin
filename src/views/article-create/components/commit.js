/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-11-30 21:58:18
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-11-30 22:16:34
 * @FilePath: /imooc-admin 2/src/views/article-create/components/commit.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createArticle, articleEdit } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
const t = i18n.global.t

export const commitArticle = async (data) => {
  const res = await createArticle(data)
  ElMessage.success(t('msg.article.createSuccess'))
  return res.data
}

export const editArticle = async (data) => {
  const res = await articleEdit(data)
  ElMessage.success(t('msg.article.editorSuccess'))
  return res.data
}
