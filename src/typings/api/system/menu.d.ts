declare namespace Api {
  namespace MenuManage {
    /**
     * menu type
     *
     * - "1": directory
     * - "2": menu
     */
    type MenuType = '1' | '2';

    /**
     * icon type
     *
     * - "1": iconify icon
     * - "2": local icon
     */
    type IconType = '1' | '2';

    type MenuPropsOfRoute = Pick<
      import('vue-router').RouteMeta,
      | 'i18nKey'
      | 'keepAlive'
      | 'constant'
      | 'order'
      | 'href'
      | 'hideInMenu'
      | 'activeMenu'
      | 'multiTab'
      | 'fixedIndexInTab'
      | 'query'
    >;

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
      dictId: string;
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

    /** role */
    type Role = Common.CommonRecord<{
      /** role name */
      roleName: string;
      /** role code */
      roleCode: string;
      /** role description */
      roleDesc: string;
    }>;
  }
}
