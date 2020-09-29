/*
 *
 * EmailSubscriber
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import DefaultView from './DefaultView'
import ActiveView from './ActiveView'

import { Wrapper, InnerWrapper } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmailSubscriber:index')

const EmailSubscriber = ({ testId }) => {
  const [active, setActive] = useState(false)

  return (
    <Wrapper testId={testId} active={active}>
      <InnerWrapper>
        {!active ? (
          <DefaultView onOpen={() => setActive(true)} />
        ) : (
          <ActiveView
            onCancel={() => {
              setActive(false)
            }}
          />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

EmailSubscriber.propTypes = {
  testId: T.string,
  // withHoverHint: T.bool,
}

EmailSubscriber.defaultProps = {
  testId: 'emailSubscriber',
  // withHoverHint: false,
}

export default React.memo(EmailSubscriber)
