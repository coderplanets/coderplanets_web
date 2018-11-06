import R from 'ramda'

const alias = {
  home: {
    user: 'C友',
  },
  javascript: {
    user: 'JSer',
  },
  ruby: {
    user: 'Rubyist',
  },
  clojure: {
    user: 'Clojurist',
  },
  python: 'Pythoner',
}

export const mapAlias = (_source, communityRaw) => {
  const communityAlias = alias[communityRaw]
  const source = R.clone(_source)

  if (!communityAlias) return source

  const aliasKeys = R.keys(communityAlias)

  R.forEach(key => {
    const index = R.findIndex(item => item.raw === key, source)
    if (index >= 0) {
      source[index] = R.merge(source[index], { alias: communityAlias[key] })
    }
  }, aliasKeys)

  return source
}

export const holder = 1
