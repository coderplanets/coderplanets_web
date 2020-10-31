//

/*
 *
 * ModeLine
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import dynamic from 'next/dynamic'
import { values } from 'ramda'

import { METRIC } from '@/constant'
import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import TopBar from './TopBar'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

let BottomBar = null

const ModeLineContainer = ({ modeLine: store, metric }) => {
  useInit(store, metric)
  const {
    isTopBarVisiable,
    viewing,
    viewingArticle,
    activeMenu,
    isCommunityBlockExpand,
  } = store
  // viewing: { community, activeThread },
  const { mobile } = useMedia()

  useEffect(() => {
    // only load BottomBar on mobile view
    BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
  }, [mobile])

  return (
    <React.Fragment>
      <TopBar
        metric={metric}
        visiable={isTopBarVisiable}
        viewing={viewing}
        viewingArticle={viewingArticle}
      />
      {BottomBar && mobile && (
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

ModeLineContainer.propTypes = {
  modeLine: T.any.isRequired,
  metric: T.oneOf(values(METRIC)),
}

ModeLineContainer.defaultProps = {
  metric: METRIC.COMMUNITY,
}

export default connectStore(ModeLineContainer)
