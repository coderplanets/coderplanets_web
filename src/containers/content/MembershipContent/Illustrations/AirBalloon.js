import React from 'react'

import { Wrapper, Balloon, Basket } from '../styles/illustrations/air_balloon'

const AirBalloon = () => {
  return (
    <Wrapper>
      <Balloon />
      <Basket />
    </Wrapper>
  )
}

export default React.memo(AirBalloon)
