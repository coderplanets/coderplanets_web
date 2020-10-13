/*
 *
 * Tabs
 *
 */

import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'
import { buildLog } from '@/utils'
import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView/index'
import ModelineView from './ModelineView'
import CardView from './CardView'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const Tabs = (props) => {
  const { mobile } = useMedia()
  const { view } = props

  const curMedia = mobile ? VIEW.MOBILE : VIEW.DESKTOP
  const curView = view === 'auto' ? curMedia : view

  switch (curView) {
    case VIEW.MOBILE: {
      return <MobileView {...props} />
    }

    case VIEW.MODELINE: {
      return <ModelineView {...props} />
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
  view: T.oneOf(['auto', VIEW.COMMUNITY_CARD, VIEW.MODELINE]),
}

Tabs.defaultProps = {
  view: 'auto',
}

export default React.memo(Tabs)
