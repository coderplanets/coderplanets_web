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
import { Wrapper } from '../styles/header'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view, ...restProps }) => {
  switch (view) {
    case VIEW.DEFAULT: {
      return (
        <>
          <IndexStatus />
          {/* @ts-ignore */}
          <Timer {...restProps} />
          <Reaction />
        </>
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
