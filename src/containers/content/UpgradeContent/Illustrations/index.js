import React from 'react'

import Rocket from './Rocket'
import UFO from './UFO'
import AirBalloon from './AirBalloon'

import { Wrapper } from '../styles/illustrations'

const renderIllustration = (type, active) => {
  switch (type) {
    case 'free': {
      return <AirBalloon active={active} />
    }

    case 'girl': {
      return <Rocket type="girl" active={active} />
    }

    case 'ufo': {
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
