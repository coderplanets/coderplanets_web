import R from 'ramda'

export const notEmpty = R.compose(
  R.not,
  R.isEmpty
)
export const isEmptyValue = R.compose(
  R.isEmpty,
  R.trim
)
export const nilOrEmpty = R.either(R.isNil, R.isEmpty)

export const hasValue = R.compose(
  R.not,
  nilOrEmpty
)

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

const notNil = R.compose(
  R.not,
  R.isNil
)

const validObjects = R.compose(
  R.pickBy(notNil),
  R.pickBy(isObject)
)

const emptyArray = obj => Array.isArray(obj) && obj.length === 0

// avoid trim on int
const trimIfNeed = v => {
  if (isString(v)) return R.trim(v)
  return v
}

const validValues = R.compose(
  R.map(trimIfNeed),
  R.pickBy(notNil),
  R.reject(isObject)
)

export const cast = (fields, source) => {
  const casted = R.pick(fields, source)

  return R.merge(validValues(casted), validObjects(casted))
}

const keyOf = R.compose(
  R.head,
  R.keys
)
const valueOf = R.compose(
  R.head,
  R.values
)

export const changeset = source => ({
  exsit: (obj, cb, opt = { skip: false }) => {
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
      return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  min: (obj, num, cb) => {
    if (source.__dirty__) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (R.trim(source[field]).length < num) {
      const title = trans
      const msg = `不能小于 ${num} 个字符`

      cb({ title, msg })
      return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  alreadyExsits: (obj, target, pools, cb) => {
    if (source.__dirty__) return changeset(source)
    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (R.length(R.filter(R.equals(target), pools)) > 0) {
      const title = trans
      const msg = '已经存在了, 请核对。'

      cb({ title, msg })
      return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
    }

    return changeset(source)
    // R.length(R.filter(R.equals(target), source)) > 0
  },
  startsWith: (obj, prefix, cb, condition = true) => {
    if (source.__dirty__ || !condition) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (
      !hasValue(source[field]) ||
      !R.startsWith(prefix, R.trim(source[field]))
    ) {
      const title = trans
      const msg = `请填写 ${prefix} 开头的链接地址`

      cb({ title, msg })
      return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
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
    return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
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
    return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
  },
  done: () => {
    if (source.__dirty__) {
      return { passed: false, rat: source.__rat__ }
    }
    return { passed: true }
  },
})
