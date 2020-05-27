import { merge, clone, keys, findIndex, forEach } from 'ramda'

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
  const source = clone(_source)

  if (!communityAlias) return source

  const aliasKeys = keys(communityAlias)

  forEach(key => {
    const index = findIndex(item => item.raw === key, source)
    if (index >= 0) {
      source[index] = merge(source[index], { alias: communityAlias[key] })
    }
  }, aliasKeys)

  return source
}

export const holder = 1
