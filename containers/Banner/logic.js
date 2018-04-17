import R from 'ramda'
import Router from 'next/router'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Banner')
/* eslint-enable no-unused-vars */

let banner = null

export function tabberChange(target) {
  // main should be current community title
  const main = R.toLower(banner.curCommunity.title)
  const sub = target

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
