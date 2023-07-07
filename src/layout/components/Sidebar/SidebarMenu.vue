<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-06-26 09:36:08
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-07-07 15:07:18
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
    router
    :collapse="!sidebarOpened"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import SidebarItem from '../SidebarItem.vue'
const router = useRouter()
import { useSidebarOpened } from '@/hooks/useSidebarOpened'
const { sidebarOpened } = useSidebarOpened()
import variables from '@/styles/variables.scss'
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
