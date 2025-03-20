import { request } from '../../request';

/** Insert */
export function fetchInsertMenu(params: any) {
  return request({
    url: '/sysMenu/save',
    method: 'post',
    data: params
  });
}

/** Update */
export function fetchUpdateMenu(params: any) {
  return request({
    url: '/sysMenu/update',
    method: 'put',
    data: params
  });
}

/** Delete */
export function fetchDeleteMenuById(id: number) {
  return request({
    url: `/sysMenu/remove/${id}`,
    method: 'delete'
  });
}

/** Delete */
export function fetchDeleteMenuByIds(params: { ids: any }) {
  return request<Api.Auth.LoginToken>({
    url: '/sysMenu/removeByIds',
    method: 'delete',
    data: params
  });
}

/** get menu list */
export function fetchGetMenuList() {
  return request<Api.MenuManage.MenuList>({
    url: '/sysMenu/page',
    method: 'get',
    params: {
      current: 1,
      size: 20
    }
  });
}

/** get all menus */
export function fetchGetMenus() {
  return request<string[]>({
    url: '/sysMenu/getAllMenus',
    method: 'get'
  });
}

/** get menu tree */
export function fetchGetMenuTree() {
  return request<Api.MenuManage.MenuTree[]>({
    url: '/sysMenu/getMenuTree',
    method: 'get'
  });
}

/** GetMenuIdsByRoleId */
export function fetchGetMenuIdsByRoleId(roleId: string | number) {
  return request<number[]>({
    url: `/sysMenu/getMenuIdsByRoleId/${roleId}`,
    method: 'get'
  });
}
