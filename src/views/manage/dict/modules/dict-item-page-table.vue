<script setup lang="tsx">
import { NButton, NPopconfirm } from 'naive-ui';
import { computed, reactive, watch } from 'vue';
import { $t } from '@/locales';
import { transDeleteParams } from '@/utils/common';
import { fetchDeleteDictItem, fetchGetDictItemPageList } from '@/service/api';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { useAppStore } from '@/store/modules/app';
import { useAuth } from '@/hooks/business/auth';
import { useDict } from '@/hooks/business/dict';
import DictItemSearch from './dict-item-search.vue';
import DictItemOperateDrawer from './dict-item-operate-drawer.vue';

defineOptions({
  name: 'DictItemPageListTable'
});

interface Props {
  dict: Api.DictManage.DictTree;
}

const props = defineProps<Props>();
const dictId = computed(() => props.dict?.id);

const appStore = useAppStore();

const { hasAuth } = useAuth();

const { dictTag } = useDict();

/** api params */
const apiParams = reactive({
  current: 1,
  size: 20,
  dictId: dictId.value,
  value: null,
  description: null,
  zhCn: null,
  enUs: null
});

const {
  columns,
  columnChecks,
  data,
  loading,
  getData,
  getDataByPage,
  mobilePagination,
  searchParams,
  updateSearchParams,
  resetSearchParams
} = useTable({
  apiFn: fetchGetDictItemPageList,
  apiParams,
  columns: () => [
    {
      type: 'selection',
      align: 'center',
      width: 48
    },
    {
      key: 'index',
      title: $t('common.index'),
      width: 64,
      align: 'center'
    },
    {
      key: 'value',
      title: $t('page.manage.dictItem.value'),
      minWidth: 64,
      align: 'center'
    },
    {
      key: 'zhCn',
      title: $t('page.manage.dictItem.zhCN'),
      minWidth: 64,
      align: 'center'
    },
    {
      key: 'enUs',
      title: $t('page.manage.dictItem.enUS'),
      minWidth: 64,
      align: 'center'
    },
    {
      key: 'sort',
      title: $t('page.manage.dictItem.sort'),
      minWidth: 64,
      align: 'center'
    },
    {
      key: 'status',
      title: $t('page.manage.dictItem.status'),
      align: 'center',
      width: 80,
      render: row => dictTag('status', row.status)
    },
    {
      key: 'description',
      title: $t('page.manage.dictItem.description'),
      minWidth: 64,
      align: 'center',
      ellipsis: {
        tooltip: true
      }
    },

    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 140,
      fixed: 'right',
      render: row => (
        <div class="flex-center gap-8px">
          {hasAuth('/sysDict/updateItem') && (
            <NButton type="primary" quaternary size="small" onClick={() => edit(row.id)}>
              {$t('common.edit')}
            </NButton>
          )}
          {hasAuth('/sysDict/removeItemById') && (
            <NPopconfirm onPositiveClick={() => handleDelete(row.id)}>
              {{
                default: () => $t('common.confirmDelete'),
                trigger: () => (
                  <NButton type="error" quaternary size="small">
                    {$t('common.delete')}
                  </NButton>
                )
              }}
            </NPopconfirm>
          )}
        </div>
      )
    }
  ]
});

const { drawerVisible, operateType, handleAdd, handleEdit, editingId, checkedRowKeys, onDeleted, onBatchDeleted } =
  useTableOperate(data, getData);

/** edit */
function edit(id: number) {
  handleEdit(id);
}

/** delete */
async function handleDelete(id: number) {
  // request
  const { error } = await fetchDeleteDictItem(transDeleteParams([id]));
  if (!error) {
    onDeleted();
  }
}

/** batch delete */
async function handleBatchDelete() {
  // request
  const { error } = await fetchDeleteDictItem(transDeleteParams(checkedRowKeys.value));
  if (!error) {
    onBatchDeleted();
  }
}

/** watch dictId */
watch(dictId, () => {
  updateSearchParams({ dictId: dictId.value });
  // update apiParams
  apiParams.dictId = dictId.value;
  getDataByPage();
});
</script>

<template>
  <div class="h-full flex-col-stretch gap-8px overflow-hidden lt-sm:overflow-auto">
    <DictItemSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard :bordered="false" class="sm:flex-1-hidden card-wrapper" content-class="flex-col">
      <TableHeaderOperation
        v-model:columns="columnChecks"
        :checked-row-keys="checkedRowKeys"
        :loading="loading"
        @add="handleAdd"
        @delete="handleBatchDelete"
        @refresh="getData"
      />
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys as number[]"
        remote
        striped
        size="small"
        class="mt-10px sm:h-full"
        :data="data"
        :scroll-x="962"
        :columns="columns"
        :flex-height="!appStore.isMobile"
        :loading="loading"
        :single-line="false"
        :row-key="row => row.id"
        :pagination="mobilePagination"
      />
    </NCard>
    <DictItemOperateDrawer
      :id="editingId"
      v-model:visible="drawerVisible"
      :dict="dict"
      :operate-type="operateType"
      @submitted="getDataByPage"
    />
  </div>
</template>
