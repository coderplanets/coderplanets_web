import React from 'react'

import { ICON } from '@/config'

import {
  Wrapper,
  Light,
  Star1,
  Star2,
  Star3,
  Star4,
  Roof,
  Body,
  Undercarriage,
  Beam,
} from '../styles/illustrations/ufo'

const UFO = ({ active }) => {
  return (
    <Wrapper>
      <Star1 src={`${ICON}/shape/star.svg`} active={active} />
      <Star2 src={`${ICON}/shape/star.svg`} active={active} />
      <Star3 src={`${ICON}/shape/star.svg`} active={active} />
      <Star4 src={`${ICON}/shape/star.svg`} active={active} />
      <Light active={active} />
      <Roof />
      <Body />
      <Undercarriage />
      <Beam />
    </Wrapper>
  )
}

export default React.memo(UFO)
