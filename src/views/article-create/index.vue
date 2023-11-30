<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-06-25 16:00:08
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-11-30 23:56:32
 * @FilePath: /imooc-admin/src/views/article-create/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-button
      type="primiry"
      style="margin: 20px 10px 5px 0"
      @click="markdownVisible = !markdownVisible"
      >切换文本编辑器</el-button
    >
    <markdown
      v-show="markdownVisible"
      :title="title"
      :detail="detail"
      @onSuccess="onSuccess"
    ></markdown>
    <editor
      v-show="!markdownVisible"
      :title="title"
      :detail="detail"
      @onSuccess="onSuccess"
    ></editor>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { articleDetail } from '@/api/article'
import Markdown from './components/Markdown.vue'
import Editor from './components/Editor.vue'
import router from '../../router'
const title = ref('')
const markdownVisible = ref(false)
// 创建成功
const onSuccess = () => {
  title.value = ''
  router.go(-1)
}

// 处理编辑相关
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = (await articleDetail(articleId)).data
  // 标题赋值
  title.value = detail.value.title
}
if (articleId) {
  getArticleDetail()
}
</script>
