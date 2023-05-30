/*
 * @Author: Ice songbing940823@gmail.com
 * @Date: 2023-05-30 16:11:31
 * @LastEditors: Ice songbing940823@gmail.com
 * @LastEditTime: 2023-05-30 16:13:42
 * @FilePath: /imooc-admin/src/hooks/login/useLogin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import login from '@/api/login'
import { ref } from 'vue'
const userName = ref('')
const passwrod = ref('')
export default function useLogin() {
  const setLogin = async () => {
    const res = await login({
      userName: userName.value,
      passwrod: passwrod.value
    })
    console.log(res)
  }
  return {
    userName,
    passwrod,
    setLogin
  }
}
