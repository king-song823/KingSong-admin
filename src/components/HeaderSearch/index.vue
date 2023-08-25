<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-08-23 14:37:06
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-08-25 17:24:39
 * @FilePath: /imooc-admin/src/layout/components/HeaderSearch/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div :class="{ show: isShow }" class="header-search">
    <svg-icon
      class-name="search-icon"
      icon="search"
      @click.stop="onShowClick"
    />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="Search"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.item.path"
        :label="option.item.title.join(' > ')"
        :value="option.item"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { filterRouters } from '@/utils/route'
import { useRouter } from 'vue-router'
import { generateRoutes } from './FuseData'
import { watchSwitchLang } from '@/utils/i18n'
import Fuse from 'fuse.js'
// 控制 search 显示
const isShow = ref(false)
let fuse

// 搜索结果
const searchOptions = ref([])
// el-select 实例
const headerSearchSelectRef = ref(null)
let searchPool = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateRoutes(filterRoutes)
})
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}
const search = ref('')

/**
 * 关闭 search 的处理事件
 */
const onClose = () => {
  headerSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}

/**
 * 监听 search 打开，处理 close 事件
 */
watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})

// 搜索方法
const querySearch = (query) => {
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
// 检索数据源
const router = useRouter()
// 选中回调
const onSelectChange = (val) => {
  router.push(val.path)
}

const initFuse = () => {
  fuse = new Fuse(searchPool.value, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const filterRoutes = filterRouters(router.getRoutes())
    return generateRoutes(filterRoutes)
  })
  initFuse(searchPool.value)
})

initFuse(searchPool.value)
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
