/*
 *
 * HaveADrink timer
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils'

import ExpandIcon from '@/components/ExpandIcon'
import RunningTimer from './RunningTimer'
import {
  Wrapper,
  SettingPanelWrapper,
  SettingItem,
  SettingDivider,
  SelectIcon,
  SelectDot,
} from '../styles/header/timer'

import { toggleTimer, setTimerInterval } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:HaveADrinkContent')

// `${ICON_CMD}/turn_on.svg`
const SettingPanel = ({ timer, timerInterval }) => {
  return (
    <SettingPanelWrapper>
      <SettingItem onClick={toggleTimer}>
        <div>定时刷新</div>
        {timer === null ? (
          <SelectIcon src={`${ICON_CMD}/turn_off.svg`} />
        ) : (
          <SelectIcon src={`${ICON_CMD}/turn_on.svg`} />
        )}
      </SettingItem>

      {timer && (
        <>
          <SettingDivider />
          <SettingItem onClick={() => setTimerInterval('3s')}>
            <div>间隔 3 秒</div>
            {timerInterval === '3s' && <SelectDot />}
          </SettingItem>
          <SettingItem onClick={() => setTimerInterval('5s')}>
            间隔 5 秒{timerInterval === '5s' && <SelectDot />}
          </SettingItem>
          <SettingItem onClick={() => setTimerInterval('10s')}>
            间隔 10 秒{timerInterval === '10s' && <SelectDot />}
          </SettingItem>
        </>
      )}
    </SettingPanelWrapper>
  )
}

const Timer = ({ timer, timerInterval }) => {
  return (
    <Wrapper>
      <ExpandIcon
        icon={
          timer === null ? (
            `${ICON_CMD}/timer.svg`
          ) : (
            <RunningTimer interval={timerInterval} />
          )
        }
        text="定时器"
        content={<SettingPanel timer={timer} timerInterval={timerInterval} />}
      />
    </Wrapper>
  )
}

Timer.propTypes = {
  timer: T.oneOfType([T.number, T.instanceOf(null)]),
  timerInterval: T.oneOf(['3s', '5s', '10s']),
}

Timer.defaultProps = {
  timer: null,
  timerInterval: '3s',
}

export default React.memo(Timer)
