import { transformRecordToOption } from '@/utils/common';

const themeColorRecord: Record<NaiveUI.ThemeColor, string> = {
  default: 'Default',
  error: 'Error',
  primary: 'Primary',
  info: 'Info',
  success: 'Success',
  warning: 'Warning'
};

export const yesOrNoRecord: Record<CommonType.YesOrNo, App.I18n.I18nKey> = {
  Y: 'common.yesOrNo.yes',
  N: 'common.yesOrNo.no'
};

export const yesOrNoOptions = transformRecordToOption(yesOrNoRecord);

export const themeColorOptions = transformRecordToOption(themeColorRecord);
