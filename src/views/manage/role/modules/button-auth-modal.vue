<script setup lang="ts">
import { computed, h, onMounted, ref, shallowRef, watch } from 'vue';
import type { TransferRenderSourceList, TreeOption } from 'naive-ui';
import { NTree } from 'naive-ui';
import { $t } from '@/locales';
import { fetchPermissionByRoleId, fetchPermissionTree, fetchUpdatePermissionByRoleId } from '@/service/api';

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
const options = shallowRef<Option[]>([]);
const treeData = ref<Option[] | undefined>([]);

function flattenTree(list: undefined | Option[]): Option[] {
  const result: Option[] = [];
  function flatten(_list: Option[] = []) {
    _list.forEach(item => {
      result.push(item);
      flatten(item.children);
    });
  }
  flatten(list);
  return result;
}

async function getAllButtons() {
  // request
  const { error, data } = await fetchPermissionTree();
  if (!error) {
    options.value = flattenTree(data);
    treeData.value = data;
  }
}

const checks = shallowRef<number[]>([]);

async function getChecks() {
  // reques
  const { error, data } = await fetchPermissionByRoleId({
    roleId: props.roleId
  });
  if (!error) {
    checks.value = data;
  }
}

async function handleSubmit() {
  // request
  const params = {
    roleId: props.roleId,
    permissionIds: checks.value
  };
  const { error } = await fetchUpdatePermissionByRoleId(params);
  if (!error) window.$message?.success?.($t('common.modifySuccess'));
  closeModal();
}

const renderSourceList: TransferRenderSourceList = ({ onCheck, pattern }) => {
  return h(NTree, {
    style: 'margin: 0 4px;',
    keyField: 'value',
    labelField: 'label',
    cascade: true,
    checkable: true,
    selectable: false,
    blockLine: true,
    checkOnClick: true,
    data: treeData.value as unknown as TreeOption[],
    pattern,
    checkedKeys: checks.value,
    onUpdateCheckedKeys: (checkedKeys: Array<string | number>) => {
      onCheck(checkedKeys);
    }
  });
};

function init() {
  getChecks();
}

watch(visible, newValue => {
  if (newValue) {
    // init
    init();
  }
});

onMounted(() => {
  getAllButtons();
});
</script>

<template>
  <NModal v-model:show="visible" :title="title" preset="card" class="w-480px">
    <NTransfer v-model:value="checks" :options="options" :render-source-list="renderSourceList" source-filterable />
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
