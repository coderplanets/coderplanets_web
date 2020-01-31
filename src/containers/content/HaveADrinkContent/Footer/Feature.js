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
import { setView, LN } from '../logic'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Feature = () => {
  const { VIEW } = LN

  return (
    <Wrapper>
      <div onClick={() => setView(VIEW.ABOUT)}>
        <Icon src={`${ICON_CMD}/drink_info.svg`} />
      </div>
      <DotDivider space="10px" radius="3px" />
      <div onClick={() => setView(VIEW.SETTING)}>
        <Icon src={`${ICON_CMD}/drink_setting.svg`} />
      </div>
      <DotDivider space="10px" radius="3px" />
      <Icon src={`${ICON_CMD}/drink_write.svg`} />
    </Wrapper>
  )
}

export default Feature
