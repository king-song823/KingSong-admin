<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-09-09 13:37:55
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-12 10:21:08
 * @FilePath: /imooc-admin 2/src/views/profile/components/feature.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item
      v-for="item in features"
      :key="item.id"
      :title="item.title"
      :name="item.id"
    >
      <div v-html="item.content"></div>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const activeName = ref(0)
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item__header {
  font-weight: bold;
}

.el-collapse-item {
  ::v-deep a {
    color: #2d62f7;
    margin: 0 4px;
  }
}
</style>
