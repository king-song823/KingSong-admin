<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-05-30 14:25:41
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-28 17:01:36
 * @FilePath: /imooc-admin/src/layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
      :class="[sidebarOpened ? 'openSidebar' : 'hideSidebar']"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import variables from '@/styles/variables.scss'
import { useSidebarOpened } from '@/hooks/useSidebarOpened'

const { sidebarOpened } = useSidebarOpened()
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth}) !important;
}
</style>
