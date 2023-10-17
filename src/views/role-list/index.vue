<!--
 * @Author: ink-song 229135518@qq.com
 * @Date: 2023-06-25 16:03:27
 * @LastEditors: ice-7777777 15519586771@163.com
 * @LastEditTime: 2023-10-17 15:50:24
 * @FilePath: /imooc-admin/src/views/role-list/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="">
    <el-card>
      <el-table :data="allRoles" border style="width: 100%">
        <el-table-column :label="$t('msg.role.index')" type="index" width="120">
        </el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title">
        </el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe">
        </el-table-column>
        <el-table-column
          :label="$t('msg.role.action')"
          prop="action"
          width="260"
        >
          <template #default="{ row }">
            <el-button
              type="primary"
              size="mini"
              @click="onDistributePermissionClick(row)"
            >
              {{ $t('msg.role.assignPermissions') }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <distribute-permission
      v-model="distributePermissionVisible"
      :roleId="selectRoleId"
    ></distribute-permission>
  </div>
</template>

<script setup>
import { roleList } from '@/api/role'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
import DistributePermission from './components/DistributePermission.vue'
const allRoles = ref([])
const getRoleList = async () => {
  allRoles.value = (await roleList()).data
}
const selectRoleId = ref('')
/**
 * 分配权限
 */
const distributePermissionVisible = ref(false)
const onDistributePermissionClick = (row) => {
  selectRoleId.value = row.id
  distributePermissionVisible.value = true
}
getRoleList()
watchSwitchLang(getRoleList)
</script>
