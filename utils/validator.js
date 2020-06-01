import {
  merge,
  startsWith,
  compose,
  not,
  isNil,
  isEmpty,
  trim,
  either,
  map,
  reject,
  keys,
  pick,
  pickBy,
  length,
  filter,
  equals,
  head,
  values,
} from 'ramda'

export const notEmpty = compose(not, isEmpty)
export const isEmptyValue = compose(isEmpty, trim)
export const nilOrEmpty = either(isNil, isEmpty)

export const hasValue = compose(not, nilOrEmpty)

export const isObject = value => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export const isString = value => {
  if (typeof value === 'string' || value instanceof String) {
    return true
  }
  return false
}

const notNil = compose(not, isNil)

const validObjects = compose(pickBy(notNil), pickBy(isObject))

const emptyArray = obj => Array.isArray(obj) && obj.length === 0

// avoid trim on int
const trimIfNeed = v => {
  if (isString(v)) return trim(v)
  return v
}

const validValues = compose(map(trimIfNeed), pickBy(notNil), reject(isObject))

export const cast = (fields, source) => {
  const casted = pick(fields, source)

  return merge(validValues(casted), validObjects(casted))
}

const keyOf = compose(head, keys)
const valueOf = compose(head, values)

export const changeset = source => ({
  exist: (obj, cb, opt = { skip: false }) => {
    if (source.__dirty__) return changeset(source)
    if (opt.skip) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)
    let isInValid = false

    if (emptyArray(source[field])) {
      isInValid = true
    } else if (!Array.isArray(source[field]) && nilOrEmpty(source[field])) {
      isInValid = true
    }

    if (isInValid) {
      const title = trans
      const msg = opt.msg || '不能为空'

      cb({ title, msg })
      return changeset(merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  min: (obj, num, cb) => {
    if (source.__dirty__) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (trim(source[field]).length < num) {
      const title = trans
      const msg = `不能小于 ${num} 个字符`

      cb({ title, msg })
      return changeset(merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  alreadyExists: (obj, target, pools, cb) => {
    if (source.__dirty__) return changeset(source)
    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (length(filter(equals(target), pools)) > 0) {
      const title = trans
      const msg = '已经存在了, 请核对。'

      cb({ title, msg })
      return changeset(merge(source, { __dirty__: true, __rat__: field }))
    }

    return changeset(source)
  },
  startsWith: (obj, prefix, cb, condition = true) => {
    if (source.__dirty__ || !condition) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (!hasValue(source[field]) || !startsWith(prefix, trim(source[field]))) {
      const title = trans
      const msg = `请填写 ${prefix} 开头的链接地址`

      cb({ title, msg })
      return changeset(merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  durationFmt: (obj, cb) => {
    if (source.__dirty__) return changeset(source)
    const field = keyOf(obj)
    const trans = valueOf(obj)

    const shortFmt = /^([01]?[0-9]|[0-5][0-9]):[0-5][0-9]$/
    const longFmt = /^(?:0[0-2]|0[0-9]):[0-5][0-9]:[0-5][0-9]$/
    // https://stackoverflow.com/questions/2732799/regex-time-validation-hhmm
    // https://stackoverflow.com/questions/14892740/regular-expression-for-hhmmss

    if (shortFmt.test(source[field]) || longFmt.test(source[field])) {
      return changeset(source)
    }
    const title = trans
    const msg = '格式：mm:ss 或者 hh:mm:ss'

    cb({ title, msg })
    return changeset(merge(source, { __dirty__: true, __rat__: field }))
  },
  dateFmt: (obj, cb, opt = { skip: false }) => {
    if (source.__dirty__) return changeset(source)
    if (opt.skip) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    const regex = /[0-9]{4}[/][0-9][0-9][/][0-3][0-9]$/
    const isValidDate = !Number.isNaN(Date.parse(source[field]))

    if (regex.test(source[field]) && isValidDate) {
      return changeset(source)
    }
    const title = trans
    const msg = '请输入格式为：YYYY/MM/DD 的合法日期'

    cb({ title, msg })
    return changeset(merge(source, { __dirty__: true, __rat__: field }))
  },
  done: () => {
    if (source.__dirty__) {
      return { passed: false, rat: source.__rat__ }
    }
    return { passed: true }
  },
})
