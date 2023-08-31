<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-05-30 14:25:05
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-08-29 22:58:14
 * @FilePath: /imooc-admin/src/layout/components/AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-main">
    {{ $t('msg.test') }}
    <router-view></router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { isTags } from '@/utils/tags'
import { generateTitle } from '@/utils/i18n'
import { useRoute } from 'vue-router'
import { useTagsViewList } from '@/hooks/useTagsViewList'
const route = useRoute()
const { addTagsViewList } = useTagsViewList()
/**
 * 生成 title
 */
const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    // 处理无 meta 的路由
    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}

/**
 * 监听路由变化
 */
watch(
  route,
  (to) => {
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    addTagsViewList({
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
