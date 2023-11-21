/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:11:31
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-11-21 11:25:38
 * @FilePath: /imooc-admin/src/hooks/useLogin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { login } from '@/api/sys'
import md5 from 'md5'
import { ref } from 'vue'
import { useToken } from '@/hooks/useToken'
import { clearAllItem } from '../utils/storage'
import { useUser } from '@/hooks/useUser'
import { usePermission } from '@/hooks/usePermission'
import router from '../router'
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

const { setToken } = useToken()

export const useLogin = () => {
  const setLogin = async () => {
    const { data, message } = await login({
      username: loginForm.value.username,
      password: md5(loginForm.value.password)
    })
    return { data, message }
  }
  const { resetRouter } = usePermission()

  const logout = () => {
    const { clearUserInfo } = useUser()
    // 去除所有缓存信息
    setToken('')
    // 重置路由信息
    resetRouter()
    clearAllItem()
    // 去除用户信息
    clearUserInfo()
    // 返回登录页面
    router.push('/login')
  }
  return {
    loginForm,
    setLogin,
    logout
  }
}
