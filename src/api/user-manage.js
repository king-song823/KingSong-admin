/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-09-12 10:54:37
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-09-17 00:11:32
 * @FilePath: /imooc-admin 2/src/api/user-manage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/**
 * 批量导入
 */
export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/**
 * 删除指定数据
 */
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

/**
 * 获取所有用户列表数据
 */
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

/**
 * 获取用户详情
 */
export const userDetail = (id) => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}
