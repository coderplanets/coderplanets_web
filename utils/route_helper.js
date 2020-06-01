import {
  compose,
  contains,
  isEmpty,
  head,
  split,
  reject,
  prop,
  endsWith,
  slice,
  clone,
  toUpper,
  toLower,
  merge,
} from 'ramda'
import { Global } from './functions'
import { isServerSide } from './ssr_helper'

// example: /getme/xxx?aa=bb&cc=dd
const parseMainPath = compose(
  head,
  split('?'),
  head,
  reject(isEmpty),
  split('/'),
  prop('asPath')
)

// example: /xxx/getme?aa=bb&cc=dd
const parsePathList = compose(
  reject(isEmpty),
  split('/'),
  head,
  reject(contains('=')),
  reject(isEmpty),
  split('?'),
  prop('url')
)

const INDEX = ''
const getMainPath = args => {
  if (args.asPath === '/') return INDEX

  // console.log('--2 args req: ', args)
  console.log('--2 args req: ', args.asPath)
  return parseMainPath(args)
}

const getSubPath = args => {
  if (args.asPath === '/') return INDEX

  const asPathList = parsePathList(args)
  // const subPath = asPathList.length > 1 ? asPathList[1] : asPathList[0]
  const subPath = asPathList.length > 1 ? asPathList[1] : ''

  return subPath
}

const getThirdPath = args => {
  if (args.asPath === '/') return INDEX

  const asPathList = parsePathList(args)
  // const subPath = asPathList.length > 1 ? asPathList[1] : asPathList[0]
  const subPath = asPathList.length > 2 ? asPathList[2] : ''

  return subPath
}

/**
 * parse subdomain of a url
 * like emacs.coderplanets.com
 * will return emacs
 * otherwise will return ""
 */
const parseSubDomain = args => {
  let communityPath = ''
  if (isServerSide) {
    // on server side
    const { subdomains } = args.req
    // eslint-disable-next-line no-console
    // NOTE:  subdomains is reversed
    // http://expressjs.com/en/4x/api.html#req.subdomains
    if (!isEmpty(subdomains)) {
      communityPath = subdomains[subdomains.length - 1]
    }
  } else {
    // browser side
    // eslint-disable-next-line no-useless-escape
    const domain = /:\/\/([^\/]+)/.exec(window.location.href)[1]
    const domainList = domain.split('.')

    if (domainList.length >= 3) {
      // eslint-disable-next-line prefer-destructuring
      communityPath = domainList[0]
    }
    // eslint-disable-next-line no-console
  }
  return communityPath
}

export const parseURL = args => {
  // const isServer = typeof window === 'undefined'
  // props 可能来自服务端的 props
  // props 也可能来自客户端的 routeObj
  let mainPath = ''
  let subPath = ''
  let thirdPath = ''
  let communityPath = parseSubDomain(args)
  let threadPath = ''

  if (communityPath === '') {
    mainPath = getMainPath(args)
    subPath = getSubPath(args)
    thirdPath = getThirdPath(args)
    communityPath = mainPath
    threadPath = subPath
  } else {
    mainPath = communityPath
    subPath = getMainPath(args)
    thirdPath = getSubPath(args)
    threadPath = subPath
  }

  return {
    communityPath,
    threadPath,
    mainPath,
    subPath,
    thirdPath,
  }
}

// --------------

export const getRoutePathList = compose(
  reject(isEmpty),
  split('/'),
  head,
  reject(contains('=')),
  reject(isEmpty),
  split('?')
)

export const getRouteMainPath = compose(
  head,
  split('?'),
  head,
  reject(isEmpty),
  split('/')
)

export const ssrParseURL = req => {
  const { url } = req
  // console.log('ssrParseURL url: ', url)
  // console.log('getMainPath: ', getRouteMainPath(url))
  // console.log('ssrParsePathList: ', getRoutePathList(url))
  const pathList = getRoutePathList(url)
  const mainPath = pathList[0]
  const subPath = pathList[1]
  const thirdPath = pathList[2] || ''

  const thread = endsWith('s', subPath) ? slice(0, -1, subPath) : subPath

  return {
    communityPath: mainPath,
    threadPath: subPath,
    mainPath,
    subPath,
    thirdPath,
    thread: toUpper(thread),
  }
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
  const thread = endsWith('s', subPath) ? slice(0, -1, subPath) : subPath

  return uppper ? toUpper(thread) : toLower(thread)
}

export const mergeRouteQuery = (query = {}, opt = { pagi: 'string' }) => {
  const routeQuery = clone(query)

  let defaultQuery = { page: '1', size: '20' }

  if (opt.pagi === 'number') {
    defaultQuery = { page: 1, size: 20 }
  }

  if (routeQuery.page && opt.pagi === 'number') {
    routeQuery.page = parseInt(routeQuery.page, 10)
  }

  return merge(defaultQuery, routeQuery)
}

export const queryStringToJSON = (path, opt = { pagi: 'string' }) => {
  const splited = split('?', path)
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

  return isEmpty(qstring) ? '' : `?${qstring}`
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
