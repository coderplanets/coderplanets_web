/*
 * ModeLine
 */

import { Fragment, FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import usePlatform from '@/hooks/usePlatform'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import type { TStore } from './store'
import TopBar from './TopBar'
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
  const { isMobile } = usePlatform()

  const {
    isTopBarVisiable,
    viewing,
    viewingArticle,
    activeMenu,
    isCommunityBlockExpand,
    curCommunity,
  } = store

  // viewing: { community, activeThread },
  useEffect(() => {
    // only load BottomBar on mobile view
    BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
  }, [isMobile])

  return (
    <Fragment>
      <TopBar
        metric={metric}
        visible={isTopBarVisiable}
        viewing={viewing}
        viewingArticle={viewingArticle}
      />
      {BottomBar && isMobile && (
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

export default pluggedIn(ModeLineContainer) as FC<TProps>
