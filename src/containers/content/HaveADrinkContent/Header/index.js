/*
 *
 * HaveADrink Header
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import IndexStatus from './IndexStatus'
import Timer from './Timer'
import Reaction from './Reaction'

import { Wrapper, GoBackWrapper, BackText, BackIcon } from '../styles/header'
import { setView } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const View = ({ view }) => {
  switch (view) {
    case 'catalog': {
      return (
        <GoBackWrapper onClick={() => setView('default')}>
          <BackIcon src={`${ICON_CMD}/navi/navi_back.svg`} />
          <BackText>返回</BackText>
        </GoBackWrapper>
      )
    }

    default: {
      return (
        <React.Fragment>
          <IndexStatus />
          <Timer />
          <Reaction />
        </React.Fragment>
      )
    }
  }
}

const Header = ({ view }) => {
  return (
    <Wrapper>
      <View view={view} />
    </Wrapper>
  )
}

export default Header
