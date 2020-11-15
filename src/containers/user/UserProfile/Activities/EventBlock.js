import React from 'react'

import BriefInfo from './BriefInfo'
import DetailInfo from './DetailInfo'

import { Wrapper } from '../styles/activities/event_block'

const EventBlock = ({ first }) => {
  return (
    <Wrapper>
      <BriefInfo first={first} />
      <DetailInfo first={first} />
    </Wrapper>
  )
}

export default React.memo(EventBlock)
