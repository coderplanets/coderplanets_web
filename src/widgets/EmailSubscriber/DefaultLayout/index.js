import React, { useState } from 'react'

import { buildLog } from '@/utils/logger'

import InActiveView from './InActiveView'
import ActiveView from './ActiveView'

import { Wrapper, InnerWrapper } from '../styles/default_layout/index'

/* eslint-disable-next-line */
const log = buildLog('w:DefaultLayout:index')

const DefaultLayout = ({ testid, activeByDefault, title, desc }) => {
  const [active, setActive] = useState(activeByDefault)

  return (
    <Wrapper testid={testid} active={active}>
      <InnerWrapper>
        {!active ? (
          <InActiveView onOpen={() => setActive(true)} />
        ) : (
          <ActiveView
            title={title}
            desc={desc}
            onCancel={() => {
              setActive(false)
            }}
          />
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(DefaultLayout)
