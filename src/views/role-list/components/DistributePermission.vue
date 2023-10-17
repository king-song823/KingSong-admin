<!--
 * @Author: ice-7777777 15519586771@163.com
 * @Date: 2023-10-17 15:38:47
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-17 15:57:06
 * @FilePath: /imooc-admin3/src/views/role-list/components/roles.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dialog
    :title="$t('msg.excel.roleDialogTitle')"
    :model-value="modelValue"
    @close="closed"
  >
    <el-tree
      ref="treeRef"
      :data="allPermission"
      show-checkbox
      check-strictly
      node-key="id"
      default-expand-all
      :props="defaultProps"
    >
    </el-tree>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{
          $t('msg.universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'
import { rolePermission, distributePermission } from '@/api/role'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])
const i18n = useI18n()
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}
/**
    确定按钮点击事件
   */
const onConfirm = async () => {
  await distributePermission({
    roleId: props.roleId,
    permissions: treeRef.value.getCheckedKeys()
  })
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
  closed()
}

// tree 节点
const treeRef = ref(null)

// 所有权限
const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = (await permissionList()).data
}
getPermissionList()
watchSwitchLang(getPermissionList)

// 获取当前用户角色的权限
const getRolePermission = async () => {
  const checkedKeys = (await rolePermission(props.roleId)).data
  treeRef.value.setCheckedKeys(checkedKeys)
  console.log(checkedKeys)
}

watch(
  () => props.roleId,
  (val) => {
    if (val) getRolePermission()
  }
)

/**
 * 关闭
 */
const closed = () => {
  emits('update:modelValue', false)
}
</script>
