import { HttpServerException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpNotImplemented';

/**
 * 501 Not Implemented
 *
 * The request method is not supported by the server and cannot be handled. The only methods that
 * servers are required to support (and therefore that must not return this code) are GET and HEAD.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
 * @see https://httpstatus.in/501/
 */
export class HttpNotImplemented extends HttpServerException {
  static readonly STATUS = 501;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 501, msgOrParams));
    Object.setPrototypeOf(this, HttpNotImplemented.prototype);
    this.name = className;
  }
}
