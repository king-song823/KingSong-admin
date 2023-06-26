<!--
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 14:24:29
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-06-25 17:25:48
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

<style lang="scss" scoped></style>
