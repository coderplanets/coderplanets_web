import { FC, Fragment, memo, useEffect } from 'react'

import useShortcut from '@/hooks/useShortcut'
import usePlatform from '@/hooks/usePlatform'

import { openDoraemon, logBuddha } from './logic'

import { AbuseReport, Drawer, Doraemon, ErrorBox, Share } from './dynamic'

const Addon: FC = () => {
  useShortcut('Control+P', openDoraemon)
  useEffect(() => logBuddha(), [])

  const { isMobile } = usePlatform()

  return (
    <Fragment>
      <AbuseReport />
      <Drawer />
      {!isMobile && <Share />}
      <Doraemon />
      <ErrorBox />
    </Fragment>
  )
}

export default memo(Addon)
