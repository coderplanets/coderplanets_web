//

/*
 *
 * ModeLineMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLineMenu')

const ModeLineMenuContainer = ({ modeLineMenu: store, testId }) => {
  useInit(store)

  return (
    <Wrapper testId={testId}>
      <h2>ModeLineMenu hooks container!</h2>
      <div>impress me!</div>
    </Wrapper>
  )
}

ModeLineMenuContainer.propTypes = {
  modeLineMenu: T.any.isRequired,
  testId: T.string,
}

ModeLineMenuContainer.defaultProps = {
  testId: 'mode-line-menu',
}

export default connectStore(ModeLineMenuContainer)
