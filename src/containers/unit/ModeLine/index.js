//

/*
 *
 * ModeLine
 *
 */

import React from 'react'
import T from 'prop-types'

import { connectStore, buildLog } from '@/utils'

import Header from './Header'
import Footer from './Footer'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:ModeLine')

const ModeLineContainer = ({ modeLine: store, testId }) => {
  useInit(store)

  return (
    <Wrapper testId={testId}>
      <Header />
      <Footer />
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
