import { FC, ReactNode, memo } from 'react'

import type { TPackage } from '../spec'
import Rocket from './Rocket'
import UFO from './UFO'
import AirBalloon from './AirBalloon'

import { PACKAGE } from '../constant'
import { Wrapper } from '../styles/illustrations'

const renderIllustration = (type: TPackage, active: boolean): ReactNode => {
  switch (type) {
    case PACKAGE.FREE: {
      return <AirBalloon />
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

type TProps = {
  type: TPackage
  active: boolean
}
const Illustrations: FC<TProps> = ({ type, active }) => {
  return <Wrapper active={active}>{renderIllustration(type, active)}</Wrapper>
}

export default memo(Illustrations)
