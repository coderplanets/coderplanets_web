/* eslint-disable */
export function isObject(value) {
  const type = typeof value
  return value != null && (type == 'object' || type == 'function')
}

export const hello = 1
