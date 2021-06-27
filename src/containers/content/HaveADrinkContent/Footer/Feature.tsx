/*
 *
 * HaveADrink timer
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import DotDivider from '@/components/DotDivider'

import { VIEW } from '../constant'
import { Wrapper, Icon } from '../styles/footer/feature'
import { setView } from '../logic'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Feature: FC = () => {
  return (
    <Wrapper>
      <div onClick={() => setView(VIEW.ABOUT)}>
        <Icon src={`${ICON_CMD}/drink_info.svg`} />
      </div>
      <DotDivider space={10} radius={3} />
      <div onClick={() => setView(VIEW.SETTING)}>
        <Icon src={`${ICON_CMD}/drink_setting.svg`} />
      </div>
      <DotDivider space={10} radius={3} />
      <Icon src={`${ICON_CMD}/drink_write.svg`} />
    </Wrapper>
  )
}

export default memo(Feature)
