<template>
  <el-config-provider :locale="language === 'en' ? en : znCn">
    <router-view />
  </el-config-provider>
</template>

<script setup>
// 导入组件之后无需注册可直接使用
import { useLanguage } from './hooks/useLanguage'
import znCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const { language } = useLanguage()
</script>
