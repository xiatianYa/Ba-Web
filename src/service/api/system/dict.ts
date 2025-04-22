import { request } from '@/service/request';

// =============== Dict Begin ===============

/** get dict page list */
export function fetchGetDictPageList(params?: Api.DictManage.DictSearchParams) {
  return request<Api.DictManage.DictPageList>({
    url: '/sysDict/page',
    method: 'get',
    params
  });
}

/** get dict list */
export function fetchGetDictList() {
  return request<Api.DictManage.DictTree[]>({
    url: '/sysDict/dictAll',
    method: 'get'
  });
}

/** get all dict options list */
export function fetchGetAllDictOptionsList() {
  return request<CommonType.Option[]>({
    url: '/sysDict/allOptions',
    method: 'get'
  });
}

/** get dict edit */
export function fetchGetEditDict(id: string) {
  return request<Api.DictManage.Dict>({
    url: `/sysDict/getInfo/${id}`,
    method: 'get'
  });
}

/** add dict info */
export function fetchAddDict(data: Api.DictManage.DictEdit) {
  return request<boolean>({
    url: '/sysDict/save',
    method: 'post',
    data
  });
}

/** update dict info */
export function fetchUpdateDict(data: Api.DictManage.DictEdit) {
  return request<boolean>({
    url: '/sysDict/update',
    method: 'put',
    data
  });
}

/** edit delete dict */
export function fetchDeleteDict(data: Api.Common.DeleteParams) {
  return request<boolean>({
    url: '/sysDict/removeByIds',
    method: 'delete',
    data
  });
}

/** get all item dict Map */
export function fetchGetAllDictItemMap() {
  return request<Map<string, Api.DictManage.DictOptions[]>>({
    url: '/sysDict/allDict',
    method: 'get'
  });
}

/** get dict item page list */
export function fetchGetDictItemPageList(params?: Api.DictManage.DictItemSearchParams) {
  return request<Api.DictManage.DictItemPageList>({
    url: '/sysDict/itemPage',
    method: 'get',
    params
  });
}

/** get dict item edit */
export function fetchGetEditDictItem(id: string | number) {
  return request<Api.DictManage.DictItem>({
    url: `/sysDict/getItemInfo/${id}`,
    method: 'get'
  });
}

/** add dict item info */
export function fetchAddDictItem(data: Api.DictManage.DictItemEdit) {
  return request<boolean>({
    url: '/sysDict/saveItem',
    method: 'post',
    data
  });
}

/** update dict item info */
export function fetchUpdateDictItem(data: Api.DictManage.DictItemEdit) {
  return request<boolean>({
    url: '/sysDict/updateItem',
    method: 'put',
    data
  });
}

/** edit delete item dict */
export function fetchDeleteDictItem(data: Api.Common.DeleteParams) {
  return request<boolean>({
    url: '/sysDict/removeItemByIds',
    method: 'delete',
    data
  });
}

/** get item dict Map */
export function fetchGetDictItemMap(data: Api.DictManage.DictStoreSearchParams) {
  return request<Api.DictManage.DictOptions[]>({
    url: '/sysDict/mapOptions',
    method: 'get',
    data
  });
}
