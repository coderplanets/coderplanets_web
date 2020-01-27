/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import Popover from '@components/Popover'
import RunningTimer from './RunningTimer'
import {
  Wrapper,
  IconWrapper,
  Icon,
  SettingPanelWrapper,
  SettingItem,
} from '../styles/header/timer'
// import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

const SettingPanel = () => {
  return (
    <SettingPanelWrapper>
      <SettingItem>定时刷新</SettingItem>
      <SettingItem>间隔 3 秒</SettingItem>
      <SettingItem>间隔 5 秒</SettingItem>
      <SettingItem>间隔 10 秒</SettingItem>
    </SettingPanelWrapper>
  )
}

const Timer = ({ type }) => {
  return (
    <Wrapper>
      <Popover placement="bottom" trigger="hover" content={<SettingPanel />}>
        <IconWrapper>
          {type === 'default' ? (
            <Icon src={`${ICON_CMD}/timer.svg`} />
          ) : (
            <RunningTimer />
          )}
        </IconWrapper>
      </Popover>
    </Wrapper>
  )
}

Timer.propTypes = {
  type: T.oneOf(['default', 'running']),
}

Timer.defaultProps = {
  type: 'default',
}

export default Timer
