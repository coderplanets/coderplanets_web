import R from 'ramda'
import Router from 'next/router'

import { makeDebugger } from '../../utils/functions'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Banner')
/* eslint-enable no-unused-vars */

let banner = null

const fmt = R.compose(R.map(R.toLower), R.split('--'))

export function tabberChange(target) {
  debug('fmt: ', fmt(target))

  const main = fmt(target)[0]
  const sub = fmt(target)[1]

  debug('push to: ', `${main}/${sub}`)

  Router.push(
    {
      pathname: '/',
      query: { main, sub },
    },
    `/${main}/${sub}`
  )
}

export function init(selectedStore) {
  banner = selectedStore
  debug(banner)
}
