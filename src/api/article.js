/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-11-14 11:01:48
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-28 15:03:33
 * @FilePath: /imooc-admin/src/api/article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 * 获取列表数据
 */
export const getArticleList = (data) => {
  return request({
    url: '/article/list',
    params: data
  })
}

/**
 * 修改排序
 */
export const articleSort = (data) => {
  return request({
    url: '/article/sort',
    method: 'POST',
    data
  })
}

/**
 * 删除文章
 */
export const deleteArticle = (articleId) => {
  return request({
    url: `/article/delete/${articleId}`
  })
}
