declare namespace Api {
  namespace DictManage {
    /** dict list */
    type DictPageList = Common.PaginatingQueryRecord<Dict>;

    /** dict search params */
    type DictSearchParams = CommonType.RecordNullable<
      Pick<Api.DictManage.Dict, 'name' | 'code'> & Api.Common.CommonSearchParams
    >;

    /** dict item search params */
    type DictItemSearchParams = CommonType.RecordNullable<
      Pick<Api.DictManage.DictItem, 'dictId' | 'value' | 'zhCn' | 'enUs' | 'description'> &
        Api.Common.CommonSearchParams
    >;

    /** dict store search params */
    type DictStoreSearchParams = CommonType.RecordNullable<{ language: string; code?: string }>;

    /** dict item page list */
    type DictItemPageList = Common.PaginatingQueryRecord<DictItem>;

    /** dict edit model */
    type DictEdit = Pick<Api.DictManage.Dict, 'name' | 'code' | 'type' | 'sort' | 'description' | 'status'>;

    /**
     * dict type
     *
     * - "1": system dict
     * - "2": business dict
     */
    type DictType = '1' | '2';

    /** dict item */
    type DictItem = Common.CommonRecord<{
      /** dict id */
      dictId: string | number;
      /** dict code */
      dictCode: string;
      /** dict item value */
      value: string;
      /** dict item label: zh_cn */
      zhCn: string;
      /** dict item label: en_us */
      enUs: string;
      /** dict item type */
      type: string;
      /** dict item sort */
      sort: number;
      /** dict item description */
      description: string;
      /** dict item status */
      status: Common.EnableStatus;
    }>;

    /** dict */
    type Dict = Common.CommonRecord<{
      /** dict name */
      name: string;
      /** dict code */
      code: string;
      /** dict type */
      type: DictType;
      /** dict sort */
      sort: number;
      /** dict description */
      description: string;
      /** dict status */
      status: Common.EnableStatus;
    }>;

    /** dict tree * */
    type DictTree = Pick<Api.DictManage.Dict, 'id' | 'name' | 'code' | 'type' | 'description' | 'status'>;

    /** dict options */
    type DictOptions = {
      label: string;
      value: string;
      type: NaiveUI.ThemeColor;
    };

    /** dict item edit model */
    type DictItemEdit = Pick<
      Api.DictManage.DictItem,
      'value' | 'zhCn' | 'enUs' | 'type' | 'sort' | 'description' | 'status'
    >;
  }
}
