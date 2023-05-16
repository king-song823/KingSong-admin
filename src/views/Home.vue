<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-05-16 22:02:24
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-05-16 22:26:38
 * @FilePath: /imooc-admin/src/views/Home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
