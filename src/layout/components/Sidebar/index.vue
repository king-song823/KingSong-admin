<!--
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 14:24:29
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-28 17:03:37
 * @FilePath: /imooc-admin/src/layout/components/Sidebar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="sidebar-container" :style="{ backgroundColor: variables.menuBg }">
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import variables from '@/styles/variables.scss'
import SidebarMenu from './SidebarMenu'
import {} from 'vue'
</script>

<style lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
