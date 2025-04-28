import { request } from '@/service/request';

/** get file log list */
export function fetchGetFileLogList(params?: Api.Monitor.FileLogSearchParams) {
  return request<Api.Monitor.FileLogList>({
    url: '/monLogsFile/page',
    method: 'get',
    params
  });
}
/** remove file log */
export function fetchRemoveLogsFile(id: number) {
  return request<boolean>({
    url: `/monLogsFile/remove/${id}`,
    method: 'delete'
  });
}
