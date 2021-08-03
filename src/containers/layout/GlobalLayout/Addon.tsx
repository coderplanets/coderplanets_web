import { FC, Fragment, memo, useEffect } from 'react'

import useShortcut from '@/hooks/useShortcut'
import { openDoraemon, logBuddha } from './logic'

import { AbuseReport, Drawer, Doraemon, ErrorBox, Share } from './dynamic'

const Addon: FC = () => {
  useShortcut('Control+P', openDoraemon)
  useEffect(() => logBuddha(), [])

  return (
    <Fragment>
      <AbuseReport />
      <Drawer />
      <Share />
      <Doraemon />
      <ErrorBox />
    </Fragment>
  )
}

export default memo(Addon)
