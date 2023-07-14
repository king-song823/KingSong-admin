<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <svg-icon icon="language" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'
import { useLanguage } from '@/hooks/useLanguage'
import { ElMessage } from 'element-plus'
const { setLanguage, language } = useLanguage()
defineProps({
  effect: {
    type: String,
    default: 'dark',
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['dark', 'light'].indexOf(value) !== -1
    }
  }
})
const i18n = useI18n()
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  setLanguage(lang)
  ElMessage.success('切换成功')
}
</script>
