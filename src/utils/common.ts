import { $t } from '@/locales';

/**
 * Transform record to option
 *
 * @example
 *   ```ts
 *   const record = {
 *     key1: 'label1',
 *     key2: 'label2'
 *   };
 *   const options = transformRecordToOption(record);
 *   // [
 *   //   { value: 'key1', label: 'label1' },
 *   //   { value: 'key2', label: 'label2' }
 *   // ]
 *   ```;
 *
 * @param record
 */
export function transformRecordToOption<T extends Record<string, string>>(record: T) {
  return Object.entries(record).map(([value, label]) => ({
    value,
    label
  })) as CommonType.Option<keyof T>[];
}

/**
 * Translate options
 *
 * @param options
 */
export function translateOptions(options: CommonType.Option<string>[]) {
  return options.map(option => ({
    ...option,
    label: $t(option.label as App.I18n.I18nKey)
  }));
}

/**
 * Toggle html class
 *
 * @param className
 */
export function toggleHtmlClass(className: string) {
  function add() {
    document.documentElement.classList.add(className);
  }

  function remove() {
    document.documentElement.classList.remove(className);
  }

  return {
    add,
    remove
  };
}

/**
 * Translate deleted id to DeleteParams
 *
 * @param record id Array
 * @returns Api.Common.DeleteParams
 */
export function transDeleteParams(record: string | number[]): Api.Common.DeleteParams {
  return { ids: record };
}

/**
 * 根据文件名称返回标签
 *
 * @param filename
 * @returns
 */
export function getFileTypeByExtension(fileType: number): 'file' | 'image' | 'video' | 'audio' {
  // 判断文件类型
  if (fileType === 1) {
    return 'image';
  } else if (fileType === 2) {
    return 'video';
  } else if (fileType === 3) {
    return 'file'; // 默认情况下，将其视为普通文件
  } else if (fileType === 4) {
    return 'audio';
  }
  return 'file'; // 默认情况下，将其视为普通文件
}

/**
 * 根据文件KB返回相应的类型
 *
 * @param fileSize
 * @returns
 */
export function getFileSizeType(fileSize: number) {
  const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unitIndex = 0;
  while (fileSize >= 1024 && unitIndex < units.length - 1) {
    // eslint-disable-next-line no-param-reassign
    fileSize /= 1024;
    unitIndex += 1;
  }
  return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
}
