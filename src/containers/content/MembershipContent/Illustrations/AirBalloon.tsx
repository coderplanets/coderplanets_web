import { FC, memo } from 'react'

import { Wrapper, Balloon, Basket } from '../styles/illustrations/air_balloon'

type TProps = {
  testid?: string
}

const AirBalloon: FC<TProps> = ({ testid = 'membership-airballoon' }) => {
  return (
    <Wrapper testid={testid}>
      <Balloon />
      <Basket />
    </Wrapper>
  )
}

export default memo(AirBalloon)
