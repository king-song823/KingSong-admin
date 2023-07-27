<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-07-25 21:21:35
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-07-25 22:46:37
 * @FilePath: /imooc-admin/src/components/ThemePicker/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 主题图标 v-bind：https://v3.cn.vuejs.org/api/instance-properties.html#attrs -->
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon id="guide-theme" icon="change-theme" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>
<script setup>
import SelectColor from './components/SelectColor.vue'
import { ref } from 'vue'

const selectColorVisible = ref(false)
const handleSetTheme = () => {
  selectColorVisible.value = true
}
</script>

<style lang="scss" scoped></style>
