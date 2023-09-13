<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-09-09 13:38:23
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-12 10:32:26
 * @FilePath: /imooc-admin 2/src/views/profile/components/author.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="author-container">
    <div class="header">
      <pan-thumb
        image="https://img4.sycdn.imooc.com/61110c2b0001152907400741-140-140.jpg"
        height="60px"
        width="60px"
        :hoverable="false"
      >
        {{ $t('msg.profile.name') }}
      </pan-thumb>
      <div class="header-desc">
        <h3>{{ $t('msg.profile.name') }}</h3>
        <span>{{ $t('msg.profile.job') }}</span>
      </div>
    </div>
    <div class="info">
      {{ $t('msg.profile.Introduction') }}
    </div>
  </div>
</template>

<script setup>
import PanThumb from './PanThumb/index.vue'
</script>

<style lang="scss" scoped>
.author-container {
  .header {
    display: flex;
    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }
  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>
