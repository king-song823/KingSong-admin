<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-06-25 16:02:47
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-14 15:55:26
 * @FilePath: /imooc-admin/src/views/import/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <upload-excel :onSuccess="onSuccess"></upload-excel>
</template>

<script setup>
import UploadExcel from '@/components/UploadExcel'
import { USER_RELATIONS, formatDate } from './utils'
import { userBatchImport } from '@/api/user-manage'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const i18n = useI18n()
const onSuccess = async ({ json }) => {
  console.log('json', json)
  if (json) {
    await userBatchImport(generateData(json))
    ElMessage.success({
      message: json.length + i18n.t('msg.excel.importSuccess'),
      type: 'success'
    })
    router.push('/user/manage')
  }
}
/**
 * 筛选数据
 */
const generateData = (results) => {
  console.log('results', results)
  const arr = []
  if (results.length) {
    results.forEach((item) => {
      const userInfo = {}
      Object.keys(item).forEach((key) => {
        if (USER_RELATIONS[key] === 'openTime') {
          userInfo[USER_RELATIONS[key]] = formatDate(item[key])
          return
        }
        userInfo[USER_RELATIONS[key]] = item[key]
        userInfo[USER_RELATIONS[key]] = item[key]
      })
      arr.push(userInfo)
    })
  }
  return arr
}
</script>
