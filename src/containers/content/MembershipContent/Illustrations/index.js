import React from 'react'

import Rocket from './Rocket'
import UFO from './UFO'
import AirBalloon from './AirBalloon'

import { PACKAGE } from '../constant'
import { Wrapper } from '../styles/illustrations'

const renderIllustration = (type, active) => {
  switch (type) {
    case PACKAGE.FREE: {
      return <AirBalloon active={active} />
    }

    case PACKAGE.GIRL: {
      return <Rocket type={PACKAGE.GIRL} active={active} />
    }

    case PACKAGE.TEAM: {
      return <UFO active={active} />
    }

    default: {
      return <Rocket active={active} />
    }
  }
}

const Illustrations = ({ type, active }) => {
  return <Wrapper active={active}>{renderIllustration(type, active)}</Wrapper>
}

export default React.memo(Illustrations)
