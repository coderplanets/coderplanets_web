import { FC, Fragment, memo, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import useShortcut from '@/hooks/useShortcut'

import { openDoraemon, logBuddha } from './logic'
import { AbuseReport, Doraemon, Drawer, ErrorBox } from './dynamic'

const Addon: FC = () => {
  useEffect(() => logBuddha(), [])
  useShortcut('Control+P', openDoraemon)

  return (
    <Fragment>
      {/* @ts-ignore */}
      {!isMobile && <AbuseReport />}
      {/* @ts-ignore */}
      <Drawer />
      {/* @ts-ignore */}
      {/* @ts-ignore */}
      {!isMobile && <Doraemon />}
      {/* @ts-ignore */}
      <ErrorBox />
    </Fragment>
  )
}

export default memo(Addon)
