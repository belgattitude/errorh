import { HttpClientException } from '../base';
import type { HttpErrorParams } from '../types';
import { getSuper } from '../utils';

const className = 'HttpImATeapot';

/**
 * Client status 418
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
 */
export class HttpImATeapot extends HttpClientException {
  static readonly STATUS = 418;
  constructor(msgOrParams?: HttpErrorParams | string) {
    super(getSuper(className, 418, msgOrParams));
    Object.setPrototypeOf(this, HttpImATeapot.prototype);
    this.name = 'HttpImATeapot';
  }
}
