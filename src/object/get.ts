import hasKey from './hasKey';
import { curryRight } from '../curry';

/**
 * @category Object
 * @param {Object} object The object to query.
 * @param {string} key The key to check.
 */
export default curryRight((object: object, key: string): any =>
  hasKey(object, key) ? object[key] : undefined,
);
