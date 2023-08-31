/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-08-26 18:07:55
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-08-29 22:57:57
 * @FilePath: /imooc-admin/src/hooks/useTagsViewList.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TAGS_VIEW } from '../constant'
import { ref } from 'vue'
import { getItem, setItem } from '../utils/storage'
const tagsViewList = ref(getItem(TAGS_VIEW) || [])

export function useTagsViewList() {
  const addTagsViewList = (tags) => {
    const isFind = tagsViewList.value.find((item) => item.path === tags.path)
    if (!isFind) {
      tagsViewList.value.push(tags)
      setItem(TAGS_VIEW, tagsViewList.value)
    }
  }

  return {
    tagsViewList,
    addTagsViewList
  }
}
