/*
 * TabBar
 */

import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'
import { buildLog } from '@/utils'
import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import NormalView from './NormalView'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

const TabBar = (props) => {
  const { view } = props
  const { mobile } = useMedia()

  const curMedia = mobile ? VIEW.MOBILE : VIEW.DESKTOP
  const curView = view === 'auto' ? curMedia : view

  switch (curView) {
    case VIEW.DESKTOP: {
      return <DesktopView {...props} />
    }

    default: {
      return <NormalView {...props} />
    }
  }
}

TabBar.propTypes = {
  view: T.oneOf(['auto', VIEW.COMMUNITY_CARD]),
}

TabBar.defaultProps = {
  view: 'auto',
}

export default React.memo(TabBar)
