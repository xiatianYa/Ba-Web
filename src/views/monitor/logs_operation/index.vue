<script setup lang="tsx">
import { NButton, NCard } from 'naive-ui';
import type { Ref } from 'vue';
import { ref } from 'vue';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { $t } from '@/locales';
import { fetchGetOperationLogList } from '@/service/api';
import { useBoolean } from '~/packages/hooks/src';
import LogsOperationSearch from './modules/operation-search.vue';
import OperationOperateModal, { type OperateType } from './modules/operation-operate-modal.vue';

const { bool: visible, setTrue: openModal } = useBoolean();

defineOptions({
  name: 'MonitorLogsOperation'
});

const appStore = useAppStore();

const {
  columns,
  columnChecks,
  data,
  loading,
  getData,
  getDataByPage,
  mobilePagination,
  searchParams,
  resetSearchParams
} = useTable({
  apiFn: fetchGetOperationLogList,
  apiParams: {
    current: 1,
    size: 10,
    createUser: null
  },
  columns: () => [
    {
      key: 'index',
      title: $t('common.index'),
      width: 64,
      align: 'center'
    },
    {
      key: 'createUser',
      title: $t('page.monitor.logs.operation.createUser'),
      align: 'center',
      width: 80,
      render: row => <div class="flex-center gap-8px">{row.userId}</div>
    },
    {
      key: 'userName',
      title: $t('page.monitor.logs.file.userName'),
      align: 'center',
      width: 100
    },
    {
      key: 'createTime',
      title: $t('page.monitor.logs.operation.createTime'),
      align: 'center',
      width: 160
    },
    {
      key: 'ip',
      title: $t('page.monitor.logs.operation.ip'),
      align: 'center',
      width: 100
    },
    {
      key: 'ipAddr',
      title: $t('page.monitor.logs.operation.ipAddr'),
      align: 'center',
      width: 140,
      ellipsis: {
        tooltip: true
      }
    },
    {
      key: 'userAgent',
      title: $t('page.monitor.logs.operation.userAgent'),
      align: 'center',
      ellipsis: {
        tooltip: true
      }
    },
    {
      key: 'requestUri',
      title: $t('page.monitor.logs.operation.requestUri'),
      align: 'center',
      width: 150,
      ellipsis: {
        tooltip: true
      }
    },
    {
      key: 'requestMethod',
      title: $t('page.monitor.logs.operation.requestMethod'),
      align: 'center',
      width: 80
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          <NButton type="primary" ghost size="small" onClick={() => handleEdit(row)}>
            查看请求参数
          </NButton>
        </div>
      )
    },
    {
      key: 'useTime',
      title: $t('page.monitor.logs.operation.useTime'),
      align: 'center',
      width: 100
    }
  ]
});

const { checkedRowKeys } = useTableOperate(data, getData);

const operateType = ref<OperateType>('add');

/** the edit menu data or the parent menu data when adding a child menu */
const editingData: Ref<Api.Monitor.OperationLog | null> = ref(null);

function handleEdit(item: Api.Monitor.OperationLog) {
  operateType.value = 'edit';
  editingData.value = { ...item };

  openModal();
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-8px overflow-hidden lt-sm:overflow-auto">
    <LogsOperationSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard :bordered="false" class="sm:flex-1-hidden card-wrapper" content-class="flex-col">
      <TableHeaderOperation
        v-model:columns="columnChecks"
        :disabled-delete="true"
        :disabled-add="true"
        :loading="loading"
        @refresh="getData"
      />
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys as number[]"
        remote
        striped
        size="small"
        class="sm:h-full"
        :data="data"
        :scroll-x="962"
        :columns="columns"
        :flex-height="!appStore.isMobile"
        :loading="loading"
        :single-line="false"
        :row-key="row => row.id"
        :pagination="mobilePagination"
      />
      <OperationOperateModal
        v-model:visible="visible"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getDataByPage"
      />
    </NCard>
  </div>
</template>
