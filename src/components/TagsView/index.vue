<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-08-26 18:26:30
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-08-26 18:51:38
 * @FilePath: /imooc-admin/src/components/TagsView/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="tags-view-container">
    <router-link
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :style="{
        backgroundColor: isActive(tag) ? variables.menuBg : '',
        borderColor: isActive(tag) ? variables.menuBg : ''
      }"
      v-for="(tag, index) in tagsViewList"
      :key="tag.fullPath"
      :to="{ path: tag.fullPath }"
    >
      {{ tag.title }}
      <i
        v-show="!isActive(tag)"
        class="el-icon-close"
        @click.prevent.stop="onCloseClick(index)"
      />
    </router-link>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import variables from '@/styles/variables.scss'
import { useTagsViewList } from '@/hooks/useTagsViewList'
const { tagsViewList } = useTagsViewList()
const route = useRoute()
/**
 * 是否被选中
 */
const isActive = (tag) => {
  return tag.path === route.path
}

/**
 * 关闭 tag 的点击事件
 */
const onCloseClick = (index) => {
  console.log(index)
}
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    // close 按钮
    .el-icon-close {
      width: 16px;
      height: 16px;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
