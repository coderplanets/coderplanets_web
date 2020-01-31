/*
 *
 * HaveADrink comments and likes
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Icon } from '../styles/footer/share'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Reaction = () => {
  return (
    <Wrapper>
      <Icon src={`${ICON_CMD}/drink_share.svg`} />
    </Wrapper>
  )
}

export default Reaction
