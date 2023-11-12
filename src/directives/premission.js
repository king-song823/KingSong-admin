/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-26 14:52:33
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-26 18:29:47
 * @FilePath: /imooc-admin3/src/directives/premission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useUser } from '@/hooks/useUser'
const { userInfo } = useUser()
function checkPermission(el, binding) {
  // 获取绑定的值，此处为权限
  const { value } = binding
  // 获取所有的用户的功能权限
  const points = userInfo.value?.permission?.points

  // 当传入的指令为数组时
  if (value && value instanceof Array) {
    const hasPermission = points?.some((point) => {
      return value.includes(point)
    })

    console.log('hasPermission', hasPermission)

    if (!hasPermission) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  } else {
    throw new Error('v-permission value is ["admin", "editor"]')
  }
}

export default {
  // 在绑定元素的父组件被挂载后调用
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  // 在包含组件的VNode，以及子组件的VNode更新后调用
  update(el, binding) {
    checkPermission(el, binding)
  }
}
