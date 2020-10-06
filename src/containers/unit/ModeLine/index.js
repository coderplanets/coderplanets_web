//

/*
 *
 * ModeLine
 *
 */

import React from 'react'
import T from 'prop-types'

import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import DesktopView from './DesktopView'
import MobileView from './MobileView'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

const ModeLineContainer = ({ modeLine: store, testId }) => {
  useInit(store)
  const { mobile } = useMedia()

  return (
    <Wrapper testId={testId}>
      {mobile ? <MobileView /> : <DesktopView />}
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
