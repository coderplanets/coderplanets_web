/*
 * ModeLine
 */

import React, { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { METRIC } from '@/constant'
import { isMobile } from 'react-device-detect'
import { pluggedIn, buildLog } from '@/utils'

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
  const {
    isTopBarVisiable,
    viewing,
    viewingArticle,
    activeMenu,
    isCommunityBlockExpand,
  } = store

  // viewing: { community, activeThread },
  useEffect(() => {
    // only load BottomBar on mobile view
    BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
  }, [isMobile])

  return (
    <React.Fragment>
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
          activeMenu={activeMenu}
          isCommunityBlockExpand={isCommunityBlockExpand}
        />
      )}
    </React.Fragment>
  )
}

export default pluggedIn(ModeLineContainer) as FC<TProps>
