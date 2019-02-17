import R from 'ramda'
import { Global } from './functions'

// example: /getme/xxx?aa=bb&cc=dd
const parseMainPath = R.compose(
  R.head,
  R.split('?'),
  R.head,
  R.reject(R.isEmpty),
  R.split('/'),
  R.prop('asPath')
)

// example: /xxx/getme?aa=bb&cc=dd
const parsePathList = R.compose(
  R.reject(R.isEmpty),
  R.split('/'),
  R.head,
  R.reject(R.contains('=')),
  R.reject(R.isEmpty),
  R.split('?'),
  R.prop('asPath')
)

const INDEX = ''
export const getMainPath = routeObj => {
  if (R.isEmpty(routeObj)) return INDEX
  if (routeObj.asPath === '/') return INDEX

  return parseMainPath(routeObj)
}

export const getSubPath = routeObj => {
  if (R.isEmpty(routeObj)) return INDEX
  if (routeObj.asPath === '/') return INDEX

  const asPathList = parsePathList(routeObj)
  // const subPath = asPathList.length > 1 ? asPathList[1] : asPathList[0]
  const subPath = asPathList.length > 1 ? asPathList[1] : ''

  return subPath
}

export const getThirdPath = routeObj => {
  if (R.isEmpty(routeObj)) return INDEX
  if (routeObj.asPath === '/') return INDEX

  const asPathList = parsePathList(routeObj)
  // const subPath = asPathList.length > 1 ? asPathList[1] : asPathList[0]
  const subPath = asPathList.length > 2 ? asPathList[2] : ''

  return subPath
}

export const akaTranslate = communityRaw => {
  switch (communityRaw) {
    case 'k8s':
      return 'kubernetes'

    case 'js':
      return 'javascript'

    case 'webassembly':
      return 'wasm'

    case 'rn':
      return 'react-native'

    default:
      return communityRaw
  }
}

export const extractThreadFromPath = (props, uppper = true) => {
  const pathList = parsePathList(props)
  const subPath = pathList.length > 1 ? pathList[1] : pathList[0]

  /*
  let thread = subPath
  if (subPath !== 'news') {
    thread = R.endsWith('s', subPath) ? R.slice(0, -1, subPath) : subPath
  }
  */
  const thread = R.endsWith('s', subPath) ? R.slice(0, -1, subPath) : subPath

  return uppper ? R.toUpper(thread) : R.toLower(thread)
}

export const mergeRouteQuery = (query = {}, opt = { pagi: 'string' }) => {
  const routeQuery = R.clone(query)

  let defaultQuery = { page: '1', size: '20' }

  if (opt.pagi === 'number') {
    defaultQuery = { page: 1, size: 20 }
  }

  if (routeQuery.page && opt.pagi === 'number') {
    routeQuery.page = parseInt(routeQuery.page, 10)
  }

  return R.merge(defaultQuery, routeQuery)
}

export const queryStringToJSON = (path, opt = { pagi: 'string' }) => {
  const splited = R.split('?', path)
  // if (splited.length !== 1) return mergeRouteQuery({}, opt)
  if (splited.length === 1) return mergeRouteQuery({}, opt)

  const result = {}
  const paris = splited[1].split('&')

  paris.forEach(pair => {
    pair = pair.split('=')
    result[pair[0]] = decodeURIComponent(pair[1] || '')
  })

  const json = JSON.parse(JSON.stringify(result))

  return mergeRouteQuery(json, opt)
}

/* eslint-disable */

export const getParameterByName = name => {
  /* if (!url) url = window.location.href;*/
  const url = Global.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export const getQueryFromUrl = (name, url) => {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
/* eslint-enable */

export const serializeQuery = obj => {
  /* eslint-disable */
  const qstring = Object.keys(obj)
    .reduce((a, k) => {
      a.push(k + '=' + encodeURIComponent(obj[k]))
      return a
    }, [])
    .join('&')

  return R.isEmpty(qstring) ? '' : `?${qstring}`
  /* eslint-enable */
}

/* eslint-disable */
// see: https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
export const parseDomain = url => {
  try {
    const parsedUrl = {}

    if (url === null || url.length === 0) return parsedUrl

    const protocolI = url.indexOf('://')
    parsedUrl.protocol = url.substr(0, protocolI)

    const remainingUrl = url.substr(protocolI + 3, url.length)
    let domainI = remainingUrl.indexOf('/')
    domainI = domainI === -1 ? remainingUrl.length - 1 : domainI
    parsedUrl.domain = remainingUrl.substr(0, domainI)
    parsedUrl.path =
      domainI === -1 || domainI + 1 === remainingUrl.length
        ? null
        : remainingUrl.substr(domainI + 1, remainingUrl.length)

    const domainParts = parsedUrl.domain.split('.')
    switch (domainParts.length) {
      case 2:
        parsedUrl.subdomain = null
        parsedUrl.host = domainParts[0]
        parsedUrl.tld = domainParts[1]
        break
      case 3:
        parsedUrl.subdomain = domainParts[0]
        parsedUrl.host = domainParts[1]
        parsedUrl.tld = domainParts[2]
        break
      case 4:
        parsedUrl.subdomain = domainParts[0]
        parsedUrl.host = domainParts[1]
        parsedUrl.tld = domainParts[2] + '.' + domainParts[3]
        break
    }

    parsedUrl.parent_domain = parsedUrl.host + '.' + parsedUrl.tld

    return parsedUrl.host
  } catch (e) {
    return '??'
  }
}
/* eslint-enable */

const TR_MAP = {
  posts: 'post',
  users: 'user',
  jobs: 'job',
  videos: 'video',
  repos: 'repo',

  post: 'posts',
  user: 'users',
  job: 'jobs',
  video: 'videos',
  repo: 'repos',

  /* wiki: 'wiki', */
  /* map: 'map', */
}

export const subPath2Thread = path => TR_MAP[path] || path
export const thread2Subpath = thread => TR_MAP[thread] || thread
