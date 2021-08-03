/*
 * TabBar
 */

import { memo } from 'react'

import { VIEW } from '@/constant'
import usePlatform from '@/hooks/usePlatform'
import { buildLog } from '@/utils/logger'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

/* eslint-disable-next-line */
const log = buildLog('c:TabBar:index')

const TabBar = (props) => {
  // const { view } = props
  const { isMobile } = usePlatform()

  const curMedia = isMobile ? VIEW.MOBILE : VIEW.DESKTOP
  // const curView = view && view === 'auto' ? curMedia : view
  const curView = curMedia

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

export default memo(TabBar)
