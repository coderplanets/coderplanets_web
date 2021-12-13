import { FC, Fragment, memo, useEffect } from 'react'

import useShortcut from '@/hooks/useShortcut'
import usePlatform from '@/hooks/usePlatform'

import { openDoraemon, logBuddha } from './logic'
import { AbuseReport, Doraemon, Share, Drawer, ErrorBox } from './dynamic'

const Addon: FC = () => {
  useEffect(() => logBuddha(), [])
  useShortcut('Control+P', openDoraemon)
  const { isMobile } = usePlatform()

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
