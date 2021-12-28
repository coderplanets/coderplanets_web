import { FC, Fragment, memo, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import useShortcut from '@/hooks/useShortcut'

import { openDoraemon, logBuddha } from './logic'
import { AbuseReport, Doraemon, Share, Drawer, ErrorBox } from './dynamic'

const Addon: FC = () => {
  useEffect(() => logBuddha(), [])
  useShortcut('Control+P', openDoraemon)

  return (
    <Fragment>
      {!isMobile && <AbuseReport />}
      <Drawer />
      {!isMobile && <Share />}
      {!isMobile && <Doraemon />}
      <ErrorBox />
    </Fragment>
  )
}

export default memo(Addon)
