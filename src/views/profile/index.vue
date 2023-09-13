<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-08-23 13:44:06
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-09-11 00:03:46
 * @FilePath: /imooc-admin 2/src/views/profile/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="my-container">
    <el-row>
      <el-col :span="6">
        <project-card class="user-card" :features="featureData"></project-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.feature')" name="feature">
              <Feature :features="featureData" />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.chapter')" name="chapter">
              <chapter />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.author')" name="author">
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import ProjectCard from './components/ProjectCard.vue'
import Chapter from './components/chapter.vue'
import Feature from './components/feature.vue'
import Author from './components/author.vue'
import { ref } from 'vue'
import { feature } from '@/api/user'
import { watchSwitchLang } from '@/utils/i18n'
const activeName = ref('feature')
const featureData = ref([])
const getFeatureData = async () => {
  const { data } = await feature()
  featureData.value = data
}
// 监听语言切换
watchSwitchLang(getFeatureData)
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
