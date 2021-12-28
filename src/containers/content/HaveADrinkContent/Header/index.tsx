/*
 *
 * HaveADrink Header
 *
 */

import { memo } from 'react'
import { isMobile } from 'react-device-detect'

import { buildLog } from '@/utils/logger'

import IndexStatus from './IndexStatus'
import Timer from './Timer'
import Reaction from './Reaction'

import { VIEW } from '../constant'
import { Wrapper, InnerWrapper } from '../styles/header'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ pagiState, category, view, ...restProps }) => {
  switch (view) {
    case VIEW.DEFAULT: {
      return (
        <InnerWrapper>
          <IndexStatus category={category} pagiState={pagiState} />
          {!isMobile && (
            <>
              {/* @ts-ignore */}
              <Timer {...restProps} />
            </>
          )}

          <Reaction category={category} />
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
