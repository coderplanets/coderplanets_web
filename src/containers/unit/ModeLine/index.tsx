/*
 * ModeLine
 */

import { Fragment, FC, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { isMobile } from 'react-device-detect'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'

import type { TStore } from './store'
// import TopBar from './TopBar'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

let BottomBar = null

type TProps = {
  modeLine?: TStore
  metric?: TMetric
}

const ModeLineContainer: FC<TProps> = ({
  modeLine: store,
  metric = METRIC.COMMUNITY,
}) => {
  useInit(store, metric)
  const [showBottomBar, setShowBottomBar] = useState(false)

  const {
    // isTopBarVisiable,
    // viewing,
    viewingArticle,
    activeMenu,
    isCommunityBlockExpand,
    curCommunity,
  } = store

  // viewing: { community, activeThread },
  useEffect(() => {
    // only load BottomBar on mobile view
    if (isMobile) {
      BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
      setShowBottomBar(true)
    }
  }, [showBottomBar])

  return (
    <Fragment>
      {/* <TopBar
        metric={metric}
        visible={isTopBarVisiable}
        viewing={viewing}
        viewingArticle={viewingArticle}
      /> */}
      {showBottomBar && BottomBar && isMobile && (
        <BottomBar
          metric={metric}
          article={viewingArticle}
          community={curCommunity}
          activeMenu={activeMenu}
          isCommunityBlockExpand={isCommunityBlockExpand}
        />
      )}
    </Fragment>
  )
}

export default bond(ModeLineContainer, 'modeLine') as FC<TProps>
