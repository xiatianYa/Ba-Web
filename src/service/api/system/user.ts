import { request } from '../../request';

/** Delete */
export function fetchDeleteUserById(id: number) {
  return request({
    url: `/sysUser/remove/${id}`,
    method: 'delete'
  });
}

/** Delete */
export function fetchDeleteUserByIds(params: any) {
  return request<Api.Auth.LoginToken>({
    url: '/sysUser/removeByIds',
    method: 'delete',
    data: params
  });
}

/** Insert */
export function fetchInsertUser(params: any) {
  return request({
    url: '/sysUser/save',
    method: 'post',
    data: params
  });
}

/** Update */
export function fetchUpdateUser(params: any) {
  return request({
    url: '/sysUser/update',
    method: 'put',
    data: params
  });
}

/** get user list */
export function fetchGetUserList(params?: Api.UserManage.UserSearchParams) {
  return request<Api.UserManage.UserList>({
    url: '/sysUser/page',
    method: 'get',
    params
  });
}

/** get scheduler all job name */
export function fetchGetUserNames() {
  return request<CommonType.Option<string>[]>({
    url: '/sysUser/allUserNames',
    method: 'get'
  });
}

/** update user info */
export function fetchUpdateUserInfo(params: Api.Auth.UserOneSelf) {
  return request({
    url: '/sysUser/updateUserInfo',
    method: 'put',
    data: params
  });
}
/** update user password */
export function fetchUpdatePassword(params: Api.Auth.UserPassword) {
  return request({
    url: '/sysUser/updatePassword',
    method: 'put',
    data: params
  });
}
/** restart user info */
export function fetchRestartUserInfo(params: Api.Auth.UserRestart) {
  return request({
    url: '/sysUser/reset',
    method: 'put',
    data: params
  });
}
