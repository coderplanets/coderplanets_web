/*
 * TabBar
 */

import React from 'react'
import T from 'prop-types'

import { VIEW } from '@/constant'
import { buildLog } from '@/utils'
import { useMedia } from '@/hooks'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

const TabBar = (props) => {
  const { view } = props
  const { mobile } = useMedia()

  const curMedia = mobile ? VIEW.MOBILE : VIEW.DESKTOP
  const curView = view === 'auto' ? curMedia : view

  console.log('props: ', props)
  switch (curView) {
    case VIEW.DESKTOP: {
      return <DesktopView {...props} />
    }

    default: {
      // for those mobile, modeline etc ..
      return <MobileView {...props} />
    }
  }
}

TabBar.propTypes = {
  view: T.oneOf(['auto', VIEW.COMMUNITY_CARD, VIEW.MODELINE]),
}

TabBar.defaultProps = {
  view: 'auto',
}

export default React.memo(TabBar)
