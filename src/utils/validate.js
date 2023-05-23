/*
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-05-23 22:05:38
 * @LastEditors: ink-song 229135518@qq.com
 * @LastEditTime: 2023-05-23 22:05:45
 * @FilePath: /imooc-admin/src/utils/validate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 判断是否为外部资源
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
