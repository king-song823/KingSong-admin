<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-05-30 14:25:05
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-06-28 14:41:58
 * @FilePath: /imooc-admin/src/layout/components/AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import {} from 'vue'
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
