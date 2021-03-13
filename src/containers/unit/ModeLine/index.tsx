//

/*
 *
 * ModeLine
 *
 */

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

import { METRIC } from '@/constant'
import { useDevice } from '@/hooks'
import { pluggedIn, buildLog } from '@/utils'

import { TStore } from './store'

import TopBar from './TopBar'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

let BottomBar = null

type TProps = {
  modeLine?: TStore
  metric?: string
}

const ModeLineContainer: React.FC<TProps> = ({
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
  const { isMobile } = useDevice()

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

export default pluggedIn(ModeLineContainer) as React.FC<TProps>
