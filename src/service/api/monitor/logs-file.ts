import { request } from '@/service/request';

/** get login log list */
export function fetchGetFileLogList(params?: Api.Monitor.FileLogSearchParams) {
  return request<Api.Monitor.FileLogList>({
    url: '/monitor/logsFile/page',
    method: 'get',
    params
  });
}
