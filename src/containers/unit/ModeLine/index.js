//

/*
 *
 * ModeLine
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import TopBar from './TopBar'
import BottomBar from './BottomBar'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

const ModeLineContainer = ({ modeLine: store, testId }) => {
  useInit(store)

  return (
    <Wrapper testId={testId}>
      <TopBar />
      <BottomBar />
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
