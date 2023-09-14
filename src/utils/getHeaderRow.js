/*
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-09-13 18:01:57
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-09-13 18:25:59
 * @FilePath: /imooc-admin 2/src/utils/getHeaderRow.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import XLSX from 'xlsx'
/**
 * 获取表头（通用方式）
 */
export const getHeaderRow = (sheet) => {
  const headers = []
  const range = XLSX.utils.decode_range(sheet['!ref'])
  let C
  const R = range.s.r
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
    /* find the cell in the first row */
    let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
    headers.push(hdr)
  }
  return headers
}

export const isExcel = (file) => {
  return /\.(xlsx|xls|csv)$/.test(file.name)
}
