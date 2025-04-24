import { request } from '@/service/request';

// =============== Logs Error Begin ===============

/** get operation log list */
export function fetchGetOperationLogList(params?: Api.Monitor.OperationLogSearchParams) {
  return request<Api.Monitor.OperationLogList>({
    url: '/monitor/monLogsOperation/page',
    method: 'get',
    params
  });
}
