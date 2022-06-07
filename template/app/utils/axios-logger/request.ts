import { AxiosRequestConfig } from 'axios';
import LogBuilder from './log-builder';

const requestLogger = (request: AxiosRequestConfig) => {
  const { url, method, data } = request;

  // @ts-ignore
  request.meta = request.meta || {};
  // @ts-ignore
  request.meta.requestStartedAt = new Date().getTime();

  const logBuilder = new LogBuilder();
  const log = logBuilder
    .makeLogTypeWithPrefix('API Request')
    .makeDateFormat(new Date())
    .makeMethod(method)
    .makeUrl(url)
    .makeData(data)
    .build();

  console.log(log);

  return request;
};

export default requestLogger;
