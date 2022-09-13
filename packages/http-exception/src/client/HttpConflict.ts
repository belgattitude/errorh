import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpConflict';

/**
 * 409 Conflict (client)
 *
 * This response is sent when a request conflicts with the current state of the server.
 *
 * @see https://httpstatus.in/409/
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
 */
export class HttpConflict extends HttpClientException {
  static readonly STATUS = 409;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 409, msgOrParams));
    Object.setPrototypeOf(this, HttpConflict.prototype);
    this.name = className;
  }
}
