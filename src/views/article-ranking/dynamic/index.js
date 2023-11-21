/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-11-17 17:51:41
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-17 18:09:05
 * @FilePath: /imooc-admin/src/views/article-ranking/dynamic/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import getDynamicData from './DynamicData'
import { watchSwitchLang } from '@/utils/i18n'
import { watch, ref } from 'vue'

// 暴露出动态列数据
export const dynamicData = ref(getDynamicData())

// 监听 语言变化
watchSwitchLang(() => {
  // 重新获取国际化的值
  dynamicData.value = getDynamicData()
  // 重新处理被勾选的列数据
  // initSelectDynamicLabel()
})
// 创建被勾选的动态列数据
export const selectDynamicLabel = ref([])
// initSelectDynamicLabel()

export function initSelectDynamicLabel() {
  selectDynamicLabel.value = []
}

// 声明 table 的列数据
export const tableColumns = ref([])
// 监听选中项的变化，根据选中项动态改变 table 列数据的值
watch(
  selectDynamicLabel,
  (val) => {
    tableColumns.value = []
    // 遍历选中项
    const selectData = dynamicData.value.filter((item) => {
      return val.includes(item.label)
    })
    tableColumns.value.push(...selectData)
  },
  {
    immediate: true
  }
)
