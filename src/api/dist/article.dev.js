'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.articleEdit =
  exports.createArticle =
  exports.articleDetail =
  exports.deleteArticle =
  exports.articleSort =
  exports.getArticleList =
    void 0

var _request = _interopRequireDefault(require('@/utils/request'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-11-14 11:01:48
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-11-30 22:16:04
 * @FilePath: /imooc-admin/src/api/article.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/**
 * 获取列表数据
 */
var getArticleList = function getArticleList(data) {
  return (0, _request['default'])({
    url: '/article/list',
    params: data
  })
}
/**
 * 修改排序
 */

exports.getArticleList = getArticleList

var articleSort = function articleSort(data) {
  return (0, _request['default'])({
    url: '/article/sort',
    method: 'POST',
    data: data
  })
}
/**
 * 删除文章
 */

exports.articleSort = articleSort

var deleteArticle = function deleteArticle(articleId) {
  return (0, _request['default'])({
    url: '/article/delete/'.concat(articleId)
  })
}
/**
 * 获取文章详情
 */

exports.deleteArticle = deleteArticle

var articleDetail = function articleDetail(articleId) {
  return (0, _request['default'])({
    url: '/article/'.concat(articleId)
  })
}
/**
 * 创建文章
 */

exports.articleDetail = articleDetail

var createArticle = function createArticle(data) {
  return (0, _request['default'])({
    url: '/article/create',
    method: 'POST',
    data: data
  })
}
/**
 * 编辑文章详情
 */

exports.createArticle = createArticle

var articleEdit = function articleEdit(data) {
  return (0, _request['default'])({
    url: '/article/edit',
    method: 'POST',
    data: data
  })
}

exports.articleEdit = articleEdit
