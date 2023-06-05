/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:11:31
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-06-05 17:20:30
 * @FilePath: /imooc-admin/src/hooks/login/useLogin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { login } from '@/api/sys'
import md5 from 'md5'
import { ref } from 'vue'
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
export const useLogin = () => {
  const setLogin = async () => {
    const { data } = await login({
      username: loginForm.value.username,
      password: md5(loginForm.value.password)
    })

    return data
  }
  return {
    loginForm,
    setLogin
  }
}
