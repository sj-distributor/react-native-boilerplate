import { AxiosResponse } from 'axios';

import LogBuilder from './log-builder';

const responseLogger = (response: AxiosResponse) => {
  const {
    config: { url, method, params },
    status,
    statusText,
  } = response;

  // @ts-ignore
  const time = new Date().getTime() - response.config.meta.requestStartedAt;

  const logBuilder = new LogBuilder();
  const log = logBuilder
    .makeLogTypeWithPrefix('API Response')
    .makeDateFormat(new Date())
    .makeMethod(method)
    .makeUrl(url)
    .makeData(params)
    .makeStatus(status, statusText)
    .makeExecuteTime(time)
    .build();

  console.log(log);

  return response;
};

export default responseLogger;
