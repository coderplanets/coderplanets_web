//

/*
 *
 * ModeLine
 *
 */

import React, { useEffect } from 'react'
import T from 'prop-types'
import dynamic from 'next/dynamic'

import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import TopBar from './TopBar'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

let BottomBar = null

const ModeLineContainer = ({ modeLine: store, testId }) => {
  useInit(store)
  const { viewing } = store
  // viewing: { community, activeThread },

  const { mobile } = useMedia()

  useEffect(() => {
    // only load BottomBar on mobile view
    BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
  }, [mobile])

  return (
    <React.Fragment testId={testId}>
      <TopBar viewing={viewing} />
      {BottomBar && mobile && <BottomBar />}
    </React.Fragment>
  )
}

ModeLineContainer.propTypes = {
  modeLine: T.any.isRequired,
  testId: T.string,
}

ModeLineContainer.defaultProps = {
  testId: 'mode-line',
}

export default connectStore(ModeLineContainer)
