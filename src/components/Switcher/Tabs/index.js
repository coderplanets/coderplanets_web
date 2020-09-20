/*
 *
 * Tabs
 *
 */

import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'
import { buildLog } from '@/utils'

import DesktopView from './DesktopView'
import CardView from './CardView'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const Tabs = (props) => {
  const { view } = props
  switch (view) {
    case VIEW.MOBILE: {
      // TODO:
      return <DesktopView {...props} />
    }

    case VIEW.COMMUNITY_CARD: {
      return <CardView {...props} />
    }

    default: {
      return <DesktopView {...props} />
    }
  }
}

Tabs.propTypes = {
  view: T.oneOf([VIEW.DESKTOP, VIEW.MOBILE, VIEW.COMMUNITY_CARD]),
}

Tabs.defaultProps = {
  view: VIEW.DESKTOP,
}

export default React.memo(Tabs)
