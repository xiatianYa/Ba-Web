<script setup lang="tsx">
import type { VNodeChild } from 'vue';
import { h, onMounted, reactive, ref, shallowRef } from 'vue';
import { NButton, NButtonGroup, NPopconfirm, NText } from 'naive-ui';
import { copy } from '@/utils/clipboard';
import { useAuth } from '@/hooks/business/auth';
import { useBoolean } from '~/packages/hooks/src';
import { fetchDeleteDict, fetchGetDictList } from '@/service/api';
import { transDeleteParams } from '@/utils/common';
import SvgIcon from '@/components/custom/svg-icon.vue';
import { $t } from '@/locales';
import DictOperateDrawer from './modules/dict-operate-drawer.vue';
import DictItemPageTable from './modules/dict-item-page-table.vue';
const { hasAuth } = useAuth();

defineOptions({
  name: 'DictPage'
});

const operateType = ref<NaiveUI.TableOperateType>('add');

const name = ref<string>('');

const { bool: dictDrawer, setTrue: openDictDrawer } = useBoolean();
const { bool: dictItemVisible, setBool: setDictItemVisible } = useBoolean();

/** the select dict data */
const dictData: DictTree = reactive({
  id: 0,
  name: '',
  code: '',
  status: '1',
  type: '1',
  description: ''
});

/** dict tree */
type DictTree = Api.DictManage.DictTree & {
  prefix?: () => import('vue').VNodeChild;
  suffix?: () => import('vue').VNodeChild;
};

/** tree data */
const dictTreeList = shallowRef<DictTree[]>([]);

/** init search data */
async function init() {
  const { error, data } = await fetchGetDictList();
  if (!error) {
    dictTreeList.value = data.map(recursive);
  }
}

/** recursive dict tree data, add prefix transform treeOption format */
function recursive(item: Api.DictManage.DictTree): DictTree {
  return {
    ...item,
    suffix: () => {
      return h(
        NButtonGroup,
        {},
        {
          default: () => [
            h(
              NButton,
              {
                size: 'tiny',
                quaternary: true,
                onClick: event => {
                  event.stopPropagation();
                  copy(item.code);
                }
              },
              { icon: () => h(SvgIcon, { icon: 'ic:baseline-content-copy' }) }
            ),
            hasAuth('/sysDict/update') &&
              h(
                NButton,
                {
                  size: 'tiny',
                  quaternary: true,
                  onClick: event => {
                    event.stopPropagation();
                    handleEdit(item);
                  }
                },
                { icon: () => h(SvgIcon, { icon: 'ic:round-edit' }) }
              ),
            hasAuth('/sysDict/delete') &&
              item.type !== '1' &&
              h(
                NPopconfirm,
                {
                  onPositiveClick: () => handleDelete(item)
                },
                {
                  default: () => $t('common.confirmDelete'),
                  trigger: () =>
                    h(
                      NButton,
                      {
                        size: 'tiny',
                        quaternary: true,
                        onClick: event => {
                          event.stopPropagation();
                        }
                      },
                      { icon: () => h(SvgIcon, { icon: 'ic:round-delete' }) }
                    )
                }
              )
          ]
        }
      );
    }
  };
}

/** add */
function handleAdd() {
  operateType.value = 'add';
  openDictDrawer();
}

/** edit */
function handleEdit(item: Api.DictManage.DictTree) {
  operateType.value = 'edit';
  Object.assign(dictData, item);
  openDictDrawer();
}

/** delete */
async function handleDelete(item: Api.DictManage.DictTree) {
  const { error } = await fetchDeleteDict(transDeleteParams([item.id]));
  if (!error) {
    window.$message?.success($t('common.deleteSuccess'));
    await init();
  }
}

/** tree select handle */
function handleSelectKeys(node: NaiveUI.TreeOption | null, action: string) {
  setDictItemVisible(action === 'select');
  if (dictItemVisible) {
    Object.assign(dictData, node);
  }
}

/** render label */
function renderLabel({ option }: { option: NaiveUI.TreeOption }): VNodeChild {
  const flag = option.status === '0';
  return <NText delete={flag}>{option.name}</NText>;
}

onMounted(() => init());
</script>

<template>
  <div class="flex">
    <NGrid
      :x-gap="8"
      :y-gap="8"
      item-responsive
      responsive="screen"
      cols="1 s:1 m:5 l:5 xl:5 2xl:5"
      class="h-full-hidden"
    >
      <NGridItem span="1" class="h-full-hidden">
        <NCard
          :title="$t('page.manage.dict.title')"
          :bordered="false"
          size="small"
          class="h-full sm:flex-1-hidden"
          content-class="h-full-hidden"
        >
          <template #header-extra>
            <NSpace>
              <NButton v-if="hasAuth('/sysDict/save')" ghost type="primary" @click="handleAdd()">
                {{ $t('common.add') }}
              </NButton>
              <NButton quaternary @click="init()">
                <template #icon>
                  <SvgIcon icon="ic:round-refresh" />
                </template>
              </NButton>
            </NSpace>
          </template>
          <NInput v-model:value="name" clearable :placeholder="$t('common.keywordSearch')" />
          <NTree
            :data="dictTreeList"
            :pattern="name"
            block-line
            class="flex-col-stretch py-3"
            key-field="id"
            label-field="name"
            virtual-scroll
            :render-label="renderLabel"
            :show-irrelevant-nodes="false"
            @update-selected-keys="(_key, _option, { node, action }) => handleSelectKeys(node, action)"
          />
        </NCard>
      </NGridItem>
      <NGridItem span="4">
        <DictItemPageTable v-if="dictItemVisible" :dict="dictData" />
        <NCard v-else :bordered="false" size="small" class="h-full">
          <NEmpty :description="$t('page.manage.dict.selectTreeIsEmptyTip')" class="h-full justify-center" />
        </NCard>
      </NGridItem>
    </NGrid>
    <DictOperateDrawer
      v-model:visible="dictDrawer"
      :dict-id="dictData?.id"
      :operate-type="operateType"
      @submitted="init"
    />
  </div>
</template>

<style lang="scss" scoped></style>
