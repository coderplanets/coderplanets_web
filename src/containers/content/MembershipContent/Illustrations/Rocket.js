import React from 'react'

import { ICON } from '@/config'

import { PACKAGE } from '../constant'
import {
  Wrapper,
  Star1,
  Star2,
  Star3,
  RocketBody,
  Body,
  Window,
  WingLeft,
  WingRight,
  GirlMarkWrapper,
  GirlIcon,
} from '../styles/illustrations/rocket'

const Rocket = ({ type, active }) => {
  return (
    <Wrapper>
      <Star1 src={`${ICON}/shape/star.svg`} active={active} />
      <Star2 src={`${ICON}/shape/star.svg`} active={active} />
      <Star3 src={`${ICON}/shape/star.svg`} active={active} />
      <RocketBody pink={type === PACKAGE.GIRL}>
        <Body pink={type === PACKAGE.GIRL} />
        {type !== PACKAGE.GIRL ? (
          <Window />
        ) : (
          <GirlMarkWrapper>
            <GirlIcon src={`${ICON}/shape/girl-mark.svg`} />
          </GirlMarkWrapper>
        )}
        <WingLeft />
        <WingRight />
      </RocketBody>
    </Wrapper>
  )
}

export default React.memo(Rocket)
