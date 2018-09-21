import R from 'ramda'

export const notEmpty = R.compose(
  R.not,
  R.isEmpty
)
export const isEmptyValue = R.compose(
  R.isEmpty,
  R.trim
)
export const nilOrEmpty = R.either(R.isNil, isEmptyValue)

export const hasValue = R.compose(
  R.not,
  nilOrEmpty
)

export const isObject = value => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

const notNil = R.compose(
  R.not,
  R.isNil
)

const validObjects = R.compose(
  R.pickBy(notNil),
  R.pickBy(isObject)
)

const validValues = R.compose(
  R.map(R.trim),
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
  exsit: (obj, cb) => {
    if (source.__dirty__) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (nilOrEmpty(source[field])) {
      const title = trans
      const msg = '不能为空 (请填写 #必填# 字段)'

      cb({ title, msg })
      return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  min: (obj, num, cb) => {
    if (source.__dirty__) return changeset(source)

    const field = keyOf(obj)
    const trans = valueOf(obj)

    if (R.trim(source[field]).length <= num) {
      const title = trans
      const msg = `不能小于 ${num} 个字符`

      cb({ title, msg })
      return changeset(R.merge(source, { __dirty__: true, __rat__: field }))
    }
    return changeset(source)
  },
  done: () => {
    if (source.__dirty__) {
      return { passed: false, rat: source.__rat__ }
    }
    return { passed: true }
  },
})
