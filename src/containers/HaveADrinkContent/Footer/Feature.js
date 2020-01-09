/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import DotDivider from '@components/DotDivider'
import { Wrapper, Icon } from '../styles/footer/feature'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Feature = () => {
  return (
    <Wrapper>
      <Icon src={`${ICON_CMD}/drink_setting.svg`} />
      <DotDivider space="10px" radius="3px" />
      <Icon src={`${ICON_CMD}/drink_fill.svg`} reverse />
    </Wrapper>
  )
}

export default Feature
