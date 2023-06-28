<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-06-28 15:58:11
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-28 16:23:56
 * @FilePath: /imooc-admin/src/layout/components/Hamburger/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="hamburger-container" @click="toggleClick">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSidebarOpened } from '@/hooks/useSidebarOpened'
const { setSidebarOpened, sidebarOpened } = useSidebarOpened()
const toggleClick = () => {
  setSidebarOpened(sidebarOpened.value)
}

const icon = computed(() =>
  sidebarOpened.value ? 'hamburger-opened' : 'hamburger-closed'
)
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
