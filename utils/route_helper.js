import R from 'ramda'
import { Global } from '../utils'

// example: /getme/xxx?aa=bb&cc=dd
export const parseMainPath = R.compose(
  R.head,
  R.split('?'),
  R.head,
  R.reject(R.isEmpty),
  R.split('/'),
  R.prop('asPath')
)

// example: /xxx/getme?aa=bb&cc=dd
export const parsePathList = R.compose(
  R.reject(R.isEmpty),
  R.split('/'),
  R.head,
  R.reject(R.contains('=')),
  R.reject(R.isEmpty),
  R.split('?'),
  R.prop('asPath')
)

const defaultQuery = { page: 1, size: 20 }
export const mergeRouteQuery = (query = {}) => {
  const routeQuery = R.clone(query)
  const { page, size } = routeQuery

  if (page) routeQuery.page = parseInt(page, 10)
  if (size) routeQuery.size = parseInt(size, 10)

  // { page: 2, size: 20 }
  return R.merge(defaultQuery, routeQuery)
}

export const queryStringToJSON = path => {
  const splited = R.split('?', path)
  if (splited.length <= 1) return mergeRouteQuery()

  const result = {}
  const paris = splited[1].split('&')

  paris.forEach(pair => {
    pair = pair.split('=')
    result[pair[0]] = decodeURIComponent(pair[1] || '')
  })

  const json = JSON.parse(JSON.stringify(result))
  return mergeRouteQuery(json)
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
/* eslint-enable */
