<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-06-26 09:36:08
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-26 18:26:31
 * @FilePath: /imooc-admin/src/layout/components/Sidebar/SidebarMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    :unique-opened="true"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
  <!-- <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <template #title>导航四</template>
    </el-menu-item>
  </el-menu> -->
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from '../SidebarItem.vue'
const router = useRouter()
import variables from '@/styles/variables.scss'
console.log('variables', variables)
import { computed } from 'vue'
import { filterRouters, generateMenus } from '@/utils/route'
const route = useRoute()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
