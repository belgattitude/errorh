import { HttpClientException } from '../base';
import type { HttpExceptionParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpUnauthorized';

/**
 * 401 Unauthorized (client)
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
 * That is, the client must authenticate itself to get the requested response.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
 * @see https://httpstatus.in/401/
 */
export class HttpUnauthorized extends HttpClientException {
  static readonly STATUS = 401;
  constructor(msgOrParams?: HttpExceptionParams | string) {
    super(getSuper(className, 401, msgOrParams));
    Object.setPrototypeOf(this, HttpUnauthorized.prototype);
    this.name = className;
  }
}
