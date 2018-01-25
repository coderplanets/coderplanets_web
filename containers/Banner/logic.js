import R from 'ramda'
import Router from 'next/router'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Banner')
/* eslint-enable no-unused-vars */

let banner = null

const fmt = R.compose(R.map(R.toLower), R.split('--'))

export function tabberChange(target) {
  const main = fmt(target)[0]
  const sub = fmt(target)[1]

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
