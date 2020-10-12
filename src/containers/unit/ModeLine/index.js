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

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

let BottomBar = null

const ModeLineContainer = ({ modeLine: store, testId }) => {
  useInit(store)

  const { mobile } = useMedia()

  useEffect(() => {
    // only load BottomBar on mobile view
    BottomBar = dynamic(() => import('./BottomBar'), { ssr: false })
  }, [mobile])

  return (
    <Wrapper testId={testId}>
      <TopBar />
      {BottomBar && mobile && <BottomBar />}
    </Wrapper>
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
