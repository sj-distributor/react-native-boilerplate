import chalk from 'chalk';
import moment from 'moment';

class LogBuilder {
  private printQueue: Array<string>;
  private filteredHeaderList: Array<string>;

  constructor() {
    this.printQueue = [];
    this.filteredHeaderList = [
      'common',
      'delete',
      'get',
      'head',
      'post',
      'put',
      'patch',
      'content-type',
      'content-length',
      'vary',
      'date',
      'connection',
      'content-security-policy',
    ];
  }

  makeLogTypeWithPrefix(logType: string) {
    const prefix = `[${logType}]`;
    this.printQueue.push(chalk.green(prefix));

    return this;
  }

  makeDateFormat(date: Date) {
    const dateFormat = moment(date).toISOString();
    this.printQueue.push(dateFormat);

    return this;
  }

  makeHeader(headers?: { [key: string]: { value: string } }) {
    const headerMap: { [key: string]: { value: string } } = {};
    for (const key in headers) {
      if (!this.filteredHeaderList.includes(key)) {
        headerMap[key] = headers[key];
      }
    }

    this.printQueue.push(JSON.stringify(headerMap));

    return this;
  }

  makeUrl(url?: string) {
    if (url) {
      this.printQueue.push(url);
    }

    return this;
  }

  makeMethod(method?: string) {
    if (method) {
      this.printQueue.push(chalk.yellow(method.toUpperCase()));
    }

    return this;
  }

  makeData(data: object) {
    if (data) {
      this.printQueue.push(JSON.stringify(data));
    }

    return this;
  }

  makeStatus(status?: number, statusText?: string) {
    if (status && statusText) {
      this.printQueue.push(`${status}:${statusText}`);
    } else if (status) {
      this.printQueue.push(`${status}`);
    } else if (statusText) {
      this.printQueue.push(statusText);
    }

    return this;
  }

  makeExecuteTime(time: number) {
    const timeFormat = `+${time}ms`;
    this.printQueue.push(chalk.yellow(timeFormat));

    return this;
  }

  build() {
    return this.printQueue.join(' ');
  }
}

export default LogBuilder;
