declare namespace Api {
  namespace Monitor {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** scheduler search params */
    type SchedulerSearchParams = CommonType.RecordNullable<
      Pick<
        Api.Monitor.Scheduler,
        'jobName' | 'jobGroup' | 'triggerName' | 'triggerGroup' | 'cron' | 'jobClassName' | 'status'
      > &
        CommonSearchParams
    >;

    /** scheduler list */
    type SchedulerList = Common.PaginatingQueryRecord<Scheduler>;

    /** error log list */
    type ErrorLogList = Common.PaginatingQueryRecord<ErrorLog>;

    /** error log list */
    type FileLogList = Common.PaginatingQueryRecord<FileLog>;

    /** error log search params */
    type ErrorLogSearchParams = CommonType.RecordNullable<
      Pick<Api.Monitor.ErrorLog, 'createUser'> & Api.Common.CommonSearchParams
    >;

    /** operation log list */
    type OperationLogList = Common.PaginatingQueryRecord<OperationLog>;

    /** login log search params */
    type OperationLogSearchParams = CommonType.RecordNullable<Api.Monitor.OperationLog & Api.Common.CommonSearchParams>;

    /** scheduler execute status */
    type SchedulerExecuteStatus = 'SUCCESS' | 'FAIL';

    /** scheduler log list */
    type SchedulerLogList = Common.PaginatingQueryRecord<SchedulerLog>;

    /** scheduler log search params */
    type SchedulerLogSearchParams = CommonType.RecordNullable<
      Pick<Api.Monitor.SchedulerLog, 'jobName'> & Api.Common.CommonSearchParams
    >;
    /** login status */
    type LogsLoginStatus = '0' | '1';

    /** login status */
    type LogsFileStatus = '0' | '1';

    /** login log list */
    type LoginLogList = Common.PaginatingQueryRecord<LoginLog>;

    /** login log search params */
    type LoginLogSearchParams = CommonType.RecordNullable<
      Pick<Api.Monitor.LoginLog, 'userName' | 'userRealName'> & Api.Common.CommonSearchParams
    >;

    /** login log search params */
    type FileLogSearchParams = CommonType.RecordNullable<
      Pick<Api.Monitor.FileLog, 'userName' | 'startTime' | 'endTime'> & Api.Common.CommonSearchParams
    >;

    /** error log */
    type ErrorLog = Common.CommonRecord<
      {
        /** exception message */
        exceptionMessage: string;
        /** exception class */
        exceptionClass: string;
        /** line */
        line: number;
        /** stackTrace */
        stackTrace: string;
      } & OperationLog
    >;

    /** scheduler */
    type Scheduler = Common.CommonRecord<{
      /** 任务名称 */
      jobName: string;
      /** 任务组别 */
      jobGroup: string;
      /** 触发器名称 */
      triggerName: string;
      /** 触发器组别 */
      triggerGroup: string;
      /** 调度表达式 */
      cron: string;
      /** 调度任务全类名 */
      jobClassName: string;
      /** 调度任务状态 */
      status: any;
    }>;

    /** OperationLog */
    type OperationLog = Common.CommonRecord<{
      /** request id */
      requestId: number;
      /** ip */
      ip: string;
      /** ip addr */
      ipAddr: string;
      /** iser agent */
      userAgent: string;
      /** request uri */
      requestUri: string;
      /** request method */
      requestMethod: string;
      /** content Type */
      contentType: string;
      /** operation message */
      operation: string;
      /** method name */
      methodName: string;
      /** method params */
      methodParams: string;
      /** use time */
      useTime: number;
      /** createUser */
      createUser: string;
    }>;

    /** scheduler log */
    type SchedulerLog = Common.CommonRecord<{
      jobName: string;
      jobGroup: string;
      useTime: number;
      createTime: string;
      exceptionMessage: string;
      exceptionClass: string;
      line: number;
      stackTrace: string;
    }>;

    /** LoginLog */
    type LoginLog = Common.CommonRecord<{
      /** user id */
      userId: number;
      /** user name */
      userName: string;
      /** user real name */
      userRealName: string;
      /** login ip */
      ip: string;
      /** login address */
      ipAddr: string;
      /** user agent */
      userAgent: string;
      /** login status */
      status: LogsLoginStatus;
      /** login message */
      message: string;
    }>;

    /** FileLog */
    type FileLog = Common.CommonRecord<{
      /** 用户ID */
      userId: number;
      /** 用户名称 */
      userName: string;
      /** 文件物理路径 */
      filePath: string;
      /** 文件网络路径 */
      fileUrl: string;
      /** 文件类型 */
      fileType: number;
      /** 文件大小 */
      fileSize: number;
      /** 异常日志 */
      errorMsg: string;
      /** 上传状态 */
      status: string;
      /** 开始时间 */
      startTime: any;
      /** 结束时间 */
      endTime: any;
    }>;

    /** Cache Redis */
    type RedisInfo = {
      /** Redis version */
      version: string;
      /** upTime */
      uptime: string;
      /** connectedClients */
      connectedClients: number;
      /** usedMemory */
      usedMemory: string;
      /** usedMemoryPeak */
      maxMemory: string;
      /** memoryUsageRate */
      memoryUsageRate: string;
      /** menFragmentationRatio */
      memFragmentationRatio: string;
      /** totalCommandsProcessed */
      totalCommandsProcessed: number;
      /** Command Stats */
      commandStats: {
        name: string;
        value: number;
        percentage: number;
      }[];
    };

    /** SystemInfo */
    type SystemInfo = {
      /** Operating system information */
      operatingSystem: OperatingSystem;
      /** Central processor information */
      centralProcessor: CentralProcessor;
      /** Global memory information */
      globalMemory: GlobalMemory;
      /** JVM information */
      jvm: JVM;
      /** File stores */
      fileStores: FileStore[];
      /** Processes */
      processes: Process[];
    };

    /** Operating system information */
    type OperatingSystem = {
      /** name */
      name: string;
      /** arch */
      arch: string;
      /** System boot time */
      systemBootTime: string;
      /** System uptime */
      systemUptime: string;
      /** Operating system manufacturer */
      manufacturer: string;
    };

    /** Central processor information */
    type CentralProcessor = {
      /** Processor name */
      name: string;
      /** Processor identifier */
      identifier: string;
      /** Vendor frequency */
      vendorFreq: string;
      /** Number of physical processors */
      physicalProcessorCount: number;
      /** Number of logical processors */
      logicalProcessorCount: number;
      /** System load average */
      systemLoadAverage: number;
      /** Processor usage rate */
      userPercent: number;
      /** System usage rate */
      systemPercent: number;
      /** Idle rate */
      idlePercent: number;
    };

    /** Global memory information */
    type GlobalMemory = {
      /** Total memory */
      total: string;
      /** Used memory */
      used: string;
      /** Available memory */
      available: string;
      /** Total swap memory */
      swapTotal: string;
      /** Used swap memory */
      swapUsed: string;
      /** Free swap memory */
      swapFree: string;
      /** Memory usage rate */
      memoryUsedRate: number;
      /** Swap usage rate */
      swapUsedRate: number;
    };

    /** JVM information */
    type JVM = {
      /** JVM name */
      vmName: string;
      /** JVM uptime */
      uptime: string;
      /** JVM version */
      vmVersion: string;
      /** JVM vendor */
      vmVendor: string;
      /** JVM start time */
      startTime: string;
      /** JVM input arguments */
      inputArguments: string;
      /** Heap memory used */
      heapMemoryUsed: string;
      /** Maximum heap memory */
      heapMemoryMax: string;
      /** Heap memory usage rate */
      memoryUsageRate: number;
      /** Non-heap memory used */
      nonHeapMemoryUsed: string;
    };

    /** File store information */
    type FileStore = {
      /** File store name */
      name: string;
      /** File store type */
      type: string;
      /** Mount */
      mount: string;
      /** Total space */
      totalSpace: string;
      /** Usable space */
      usableSpace: string;
      /** Used space */
      usedSpace: string;
      /** Usage rate */
      usedPercentage: string;
    };

    /** Process information */
    type Process = {
      /** Process ID */
      processID: number;
      /** Process name */
      name: string;
      /** CPU load */
      cpuLoad: string;
    };
  }
}
