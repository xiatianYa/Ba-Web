<script setup lang="tsx">
import { NButton, NCard, NPopconfirm } from 'naive-ui';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { $t } from '@/locales';
import { useDict } from '@/hooks/business/dict';
import { fetchGetFileLogList, fetchRemoveLogsFile } from '@/service/api';
import { useAuth } from '@/hooks/business/auth';
import { getFileSizeType } from '@/utils/common';
import LogsOperationSearch from './modules/operation-search.vue';

defineOptions({
  name: 'MonitorLogsOperation'
});

const appStore = useAppStore();

const { dictTag } = useDict();

const { hasAuth } = useAuth();

const { columns, data, loading, getData, getDataByPage, mobilePagination, searchParams, resetSearchParams } = useTable({
  apiFn: fetchGetFileLogList,
  apiParams: {
    current: 1,
    size: 10,
    userName: null,
    startTime: null,
    endTime: null
  },
  columns: () => [
    {
      key: 'index',
      title: $t('common.index'),
      width: 64,
      align: 'center'
    },
    {
      key: 'userId',
      title: $t('page.monitor.logs.file.userId'),
      align: 'center',
      width: 80
    },
    {
      key: 'userName',
      title: $t('page.monitor.logs.file.userName'),
      align: 'center',
      width: 140
    },
    {
      key: 'filePath',
      title: $t('page.monitor.logs.file.filePath')
    },
    {
      key: 'fileUrl',
      title: $t('page.monitor.logs.file.fileUrl'),
      align: 'center'
    },
    {
      key: 'fileType',
      title: $t('page.monitor.logs.file.fileType'),
      align: 'center',
      width: 140
    },
    {
      key: 'fileSize',
      title: $t('page.monitor.logs.file.fileSize'),
      align: 'center',
      width: 140,
      render: row => <div class="flex-center justify-center gap-8px">{getFileSizeType(row.fileSize)}</div>
    },
    {
      key: 'status',
      title: $t('page.monitor.logs.file.status'),
      align: 'center',
      width: 100,
      render: row => dictTag('sys_status', row.status)
    },
    {
      key: 'errorMsg',
      title: $t('page.monitor.logs.file.errorMsg'),
      align: 'center'
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          {hasAuth('/monitor/logsFile/remove') && (
            <NPopconfirm onPositiveClick={() => handleDelete(row.id)}>
              {{
                default: () => $t('common.confirmDelete'),
                trigger: () => (
                  <NButton type="error" ghost size="small">
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

const { onDeleted } = useTableOperate(data, getData);

async function handleDelete(id: number) {
  const { error } = await fetchRemoveLogsFile(id);
  if (error) return;
  onDeleted();
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-8px overflow-hidden lt-sm:overflow-auto">
    <LogsOperationSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard :bordered="false" class="sm:flex-1-hidden card-wrapper" content-class="flex-col">
      <TableHeaderOperation :disabled-delete="true" :disabled-add="true" :loading="loading" @refresh="getData" />
      <NDataTable
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
  </div>
</template>
