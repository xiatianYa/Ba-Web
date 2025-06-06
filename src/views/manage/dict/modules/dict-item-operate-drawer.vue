<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';
import { themeColorOptions } from '@/constants/common';
import { fetchAddDictItem, fetchGetEditDictItem, fetchUpdateDictItem } from '@/service/api';
import { useDict } from '@/hooks/business/dict';

defineOptions({
  name: 'DictItemOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the dict data */
  dict: Api.DictManage.DictTree;
  /** the edit row data */
  id?: string | number;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'submitted'): void;
}

const emit = defineEmits<Emits>();

const visible = defineModel<boolean>('visible', {
  default: false
});

const { formRef, validate, restoreValidation } = useNaiveForm();
const { defaultRequiredRule } = useFormRules();

const { dictOptions } = useDict();

const title = computed(() => {
  const titles: Record<NaiveUI.TableOperateType, string> = {
    add: $t('page.manage.dictItem.addDictItem'),
    edit: $t('page.manage.dictItem.editDictItem')
  };
  return titles[props.operateType];
});

type Model = Api.DictManage.DictItemEdit & { dictId: string | number; dictCode: string };

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    dictId: props.dict.id,
    dictCode: props.dict.code,
    value: '',
    zhCn: '',
    enUs: '',
    type: 'default',
    description: '',
    sort: 1,
    status: '1'
  };
}

type RuleKey = Extract<keyof Model, 'value' | 'zhCn' | 'enUs'>;

const rules: Record<RuleKey, App.Global.FormRule> = {
  value: defaultRequiredRule,
  zhCn: defaultRequiredRule,
  enUs: defaultRequiredRule
};

const isEdit = computed(() => props.operateType === 'edit');

async function handleInitModel() {
  Object.assign(model, createDefaultModel());
  if (props.operateType === 'edit' && props.id) {
    const { error, data } = await fetchGetEditDictItem(props.id);
    if (!error) {
      Object.assign(model, data);
    }
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();
  const func = isEdit.value ? fetchUpdateDictItem : fetchAddDictItem;
  const { error } = await func(model);
  if (!error) {
    window.$message?.success(isEdit.value ? $t('common.updateSuccess') : $t('common.addSuccess'));
    closeDrawer();
    emit('submitted');
  }
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel();
    restoreValidation();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model" :rules="rules">
        <NFormItem :label="$t('page.manage.dictItem.value')" path="value">
          <NInput v-model:value="model.value" :placeholder="$t('page.manage.dictItem.form.value')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.dictItem.zhCN')" path="zhCn">
          <NInput v-model:value="model.zhCn" :placeholder="$t('page.manage.dictItem.form.zhCN')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.dictItem.enUS')" path="enUs">
          <NInput v-model:value="model.enUs" :placeholder="$t('page.manage.dictItem.form.enUS')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.dictItem.status')" path="status">
          <NRadioGroup v-model:value="model.status">
            <NRadio v-for="item in dictOptions('status')" :key="item.value" :value="item.value" :label="item.label" />
          </NRadioGroup>
        </NFormItem>
        <NFormItem :label="$t('page.manage.dictItem.sort')" path="sort">
          <NInputNumber v-model:value="model.sort" :placeholder="$t('page.manage.dictItem.form.sort')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.dictItem.type')" path="type">
          <NSelect
            v-model:value="model.type"
            :placeholder="$t('page.manage.dictItem.form.type')"
            :options="themeColorOptions"
          />
        </NFormItem>
        <NFormItem :label="$t('page.manage.dictItem.description')" path="description">
          <NInput v-model:value="model.description" :placeholder="$t('page.manage.dictItem.form.description')" />
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace>
          <NButton quaternary @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>
