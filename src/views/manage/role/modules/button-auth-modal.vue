<script setup lang="ts">
import { computed, h, ref, shallowRef, watch } from 'vue';
import type { TransferRenderSourceList, TreeOption } from 'naive-ui';
import { NTree } from 'naive-ui';
import { $t } from '@/locales';
import { fetchPermissionTree } from '@/service/api';

defineOptions({
  name: 'ButtonAuthModal'
});

interface Props {
  /** the roleId */
  roleId: string | number;
}

const props = defineProps<Props>();

const visible = defineModel<boolean>('visible', {
  default: false
});

function closeModal() {
  visible.value = false;
}

const title = computed(() => $t('common.edit') + $t('page.manage.role.buttonAuth'));

interface Option {
  label: string;
  value: number;
  children?: Option[];
  disabled?: boolean;
}
const tree = shallowRef<Option[]>([]);

async function getAllButtons() {
  // request
  const { error, data } = await fetchPermissionTree();
  if (!error) {
    tree.value = data;
  }
}

const checks = ref<Array<string | number>>([]);

async function getChecks() {
  // request
  // const { error, data } = await fetchPermissionByRoleId(props.roleId);
  // if (!error) {
  //   checks.value = data;
  // }
}

async function handleSubmit() {
  // request
  const params = {
    roleId: props.roleId,
    permissionList: checks.value
  };
  // const result = await fetchUpdatePermissionByRoleId(params);
  // if (result.data) window.$message?.success?.($t('common.modifySuccess'));
  closeModal();
}

const renderSourceList: TransferRenderSourceList = ({ onCheck, pattern }) => {
  console.log(tree.value);
  console.log(checks.value);

  return h(NTree, {
    style: 'margin: 0 4px;',
    keyField: 'value',
    checkable: true,
    selectable: false,
    blockLine: true,
    checkOnClick: true,
    data: tree.value as unknown as TreeOption[],
    pattern,
    checkedKeys: checks.value,
    onUpdateCheckedKeys: (checkedKeys: Array<string | number>) => {
      onCheck(checkedKeys);
    }
  });
};

function init() {
  getAllButtons();
  getChecks();
}

watch(visible, newValue => {
  if (newValue) {
    // init
    init();
  }
});
</script>

<template>
  <NModal v-model:show="visible" :title="title" preset="card" class="w-480px">
    <NTransfer v-model:value="checks" :options="tree" :render-source-list="renderSourceList" source-filterable />
    <template #footer>
      <NSpace justify="end">
        <NButton size="small" class="mt-16px" @click="closeModal">
          {{ $t('common.cancel') }}
        </NButton>
        <NButton type="primary" size="small" class="mt-16px" @click="handleSubmit">
          {{ $t('common.confirm') }}
        </NButton>
      </NSpace>
    </template>
  </NModal>
</template>

<style scoped></style>
