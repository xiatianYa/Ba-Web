import { request } from '../../request';

/** Insert */
export function fetchInsertRole(params: any) {
  return request({
    url: '/sysRole/save',
    method: 'post',
    data: params
  });
}

/** Update */
export function fetchUpdateRole(params: any) {
  return request({
    url: '/sysRole/update',
    method: 'put',
    data: params
  });
}

/** Delete */
export function fetchDeleteRoleById(id: number) {
  return request({
    url: `/sysRole/remove/${id}`,
    method: 'delete'
  });
}

/** Delete */
export function fetchDeleteRoleByIds(params: any) {
  return request<Api.Auth.LoginToken>({
    url: '/sysRole/removeByIds',
    method: 'delete',
    data: params
  });
}

/** UpdateRoleMenu */
export function fetchUpdateRoleMenu(params: any) {
  return request({
    url: '/sysRole/updateRoleMenu',
    method: 'put',
    data: params
  });
}

/** get role list */
export function fetchGetRoleList(params?: Api.RoleManage.RoleSearchParams) {
  return request<Api.RoleManage.RoleList>({
    url: '/sysRole/page',
    method: 'get',
    params
  });
}

/**
 * get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles() {
  return request<Api.RoleManage.AllRole[]>({
    url: '/sysRole/getAllRoles',
    method: 'get'
  });
}

/** get permission tree */
export function fetchPermissionTree() {
  return request({
    url: '/sysRole/getPermissionTree',
    method: 'get'
  });
}

/** get PermissionIds */
export function fetchPermissionByRoleId(params?: any) {
  return request({
    url: '/sysRole/getPermissionIdsByRoleId',
    method: 'get',
    params
  });
}

/** update PermissionIds */
export function fetchUpdatePermissionByRoleId(params?: any) {
  return request({
    url: '/sysRole/updatePermissionIdsByRoleId',
    method: 'put',
    data: params
  });
}
