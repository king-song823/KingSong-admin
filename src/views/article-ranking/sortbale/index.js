/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-11-28 10:01:37
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-28 15:10:24
 * @FilePath: /imooc-admin/src/views/article-ranking/sortbale/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE

 */
import { ref } from 'vue'
import Sortable from 'sortablejs'
export const tableRef = ref(null)
import { articleSort } from '@/api/article'
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
export const initSortable = (tableData, cb) => {
  // 设置拖拽效果
  const el = tableRef.value.$el.querySelectorAll(
    '.el-table__body-wrapper table > tbody'
  )[0]

  // 1. 要拖拽的元素
  // 2. 配置对象
  Sortable.create(el, {
    // 拖拽时类名
    ghostClass: 'sortable-ghost',
    // 拖拽结束的回调方法
    async onEnd(event) {
      const { newIndex, oldIndex } = event
      // 修改数据
      await articleSort({
        initRanking: tableData.value[oldIndex].ranking,
        finalRanking: tableData.value[newIndex].ranking
      })
      ElMessage.success({
        message: i18n.global.t('msg.article.sortSuccess'),
        type: 'success'
      })
      // 直接重新获取数据无法刷新 table！！
      tableData.value = []
      // 重新获取数据
      cb && cb()
    }
  })
}
