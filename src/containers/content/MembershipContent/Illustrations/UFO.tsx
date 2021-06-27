import { FC, memo } from 'react'

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

type TProps = {
  testid?: string
  active: boolean
}

const UFO: FC<TProps> = ({ testid = 'membership-ufo', active }) => {
  return (
    <Wrapper testid={testid}>
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

export default memo(UFO)
