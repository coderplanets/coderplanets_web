/*
 *
 * HaveADrink Header
 *
 */

import React from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import IndexStatus from './IndexStatus'
import Timer from './Timer'
import Reaction from './Reaction'

import { Wrapper, GoBackWrapper, BackText, BackIcon } from '../styles/header'
import { setView, LN } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view, ...restProps }) => {
  const { VIEW } = LN
  switch (view) {
    case VIEW.DEFAULT: {
      return (
        <>
          <IndexStatus />
          <Timer {...restProps} />
          <Reaction />
        </>
      )
    }

    default: {
      return (
        <GoBackWrapper onClick={() => setView('default')}>
          <BackIcon src={`${ICON_CMD}/navi/navi_back.svg`} />
          <BackText>返回</BackText>
        </GoBackWrapper>
      )
    }
  }
}

const Header = ({ ...restProps }) => {
  return (
    <Wrapper>
      <View {...restProps} />
    </Wrapper>
  )
}

export default React.memo(Header)
