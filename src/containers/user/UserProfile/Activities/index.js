import React from 'react'

import EventBlock from './EventBlock'

import { Wrapper, Title, Divider } from '../styles/activities'

const Activities = () => {
  return (
    <Wrapper>
      <Title>最新动态</Title>
      <Divider />
      <EventBlock first />
      <EventBlock />
      <EventBlock />
    </Wrapper>
  )
}

export default React.memo(Activities)
