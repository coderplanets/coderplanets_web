/*
 *
 * HaveADrink Header
 *
 */

import { memo } from 'react'

import { buildLog } from '@/utils/logger'

import IndexStatus from './IndexStatus'
import Timer from './Timer'
import Reaction from './Reaction'

import { VIEW } from '../constant'
import { Wrapper, InnerWrapper } from '../styles/header'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ category, view, ...restProps }) => {
  switch (view) {
    case VIEW.DEFAULT: {
      return (
        <InnerWrapper>
          <IndexStatus category={category} />
          {/* @ts-ignore */}
          <Timer {...restProps} />
          <Reaction />
        </InnerWrapper>
      )
    }

    default: {
      return null
    }
  }
}

const Header = (props) => {
  return (
    <Wrapper>
      <View {...props} />
    </Wrapper>
  )
}

export default memo(Header)
