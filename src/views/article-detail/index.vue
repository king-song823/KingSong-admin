<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-06-25 16:02:28
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-28 15:19:34
 * @FilePath: /imooc-admin/src/views/article-detail/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="article-detail-container">
    <h2 class="title">{{ detail.title }}</h2>
    <div class="header">
      <span class="author"
        >{{ $t('msg.article.author') }}：{{ detail.author }}</span
      >
      <span class="time"
        >{{ $t('msg.article.publicDate') }}：{{
          $filters.relativeTime(detail.publicDate)
        }}</span
      >
      <el-button type="text" class="edit" @click="onEditClick">{{
        $t('msg.article.edit')
      }}</el-button>
    </div>
    <div class="content" v-html="detail.content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { articleDetail } from '@/api/article'

// 获取数据
const route = useRoute()
const articleId = route.params.id
const detail = ref({})
const getArticleDetail = async () => {
  detail.value = (await articleDetail(articleId)).data
}
getArticleDetail()
</script>
<style lang="scss" scoped>
.article-detail-container {
  .title {
    font-size: 22px;
    text-align: center;
    padding: 12px 0;
  }
  .header {
    padding: 26px 0;
    .author {
      font-size: 14px;
      color: #555666;
      margin-right: 20px;
    }
    .time {
      font-size: 14px;
      color: #999aaa;
      margin-right: 20px;
    }
    .edit {
      float: right;
    }
  }
  .content {
    font-size: 14px;
    padding: 20px 0;
    border-top: 1px solid #d4d4d4;
  }
}
</style>
