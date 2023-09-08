<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-08-23 13:44:06
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-06 13:40:04
 * @FilePath: /imooc-admin/src/layout/components/LangSelect/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.lang')" :effect="effect">
        <svg-icon id="guide-lang" icon="language" />
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
setLanguage(language.value)
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  setLanguage(lang)
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>
