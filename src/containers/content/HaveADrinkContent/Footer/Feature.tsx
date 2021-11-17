/*
 *
 * HaveADrink timer
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import DotDivider from '@/widgets/DotDivider'

import { VIEW } from '../constant'
import {
  Wrapper,
  InfoIcon,
  SettingIcon,
  EditPenIcon,
} from '../styles/footer/feature'
import { setView } from '../logic'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const Feature: FC = () => {
  return (
    <Wrapper>
      <div onClick={() => setView(VIEW.ABOUT)}>
        <InfoIcon />
      </div>
      <DotDivider space={10} radius={2} />
      <div onClick={() => setView(VIEW.SETTING)}>
        <SettingIcon />
      </div>
      <DotDivider space={10} radius={2} />
      <div onClick={() => setView(VIEW.EDIT)}>
        <EditPenIcon />
      </div>
    </Wrapper>
  )
}

export default memo(Feature)
