import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpVersionNotSupported';

/**
 * 505 HTTP Version Not Supported
 *
 * The HTTP version used in the request is not supported by the server.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
 * @see https://httpstatus.in/505/
 */
export class HttpVersionNotSupported extends HttpServerException {
  static readonly STATUS = 505;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 505, msgOrParams));
    Object.setPrototypeOf(this, HttpVersionNotSupported.prototype);
    this.name = className;
  }
}
