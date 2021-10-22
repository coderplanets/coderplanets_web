/*
 *
 * HaveADrink timer
 *
 */

import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { buildLog } from '@/utils/logger'

import ExpandIcon from '@/widgets/ExpandIcon'

import type { TInterval } from '../spec'
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

type TProps = {
  timer: number | null
  timerInterval?: TInterval
}

const Timer: FC<TProps> = ({ timer, timerInterval = '3s' }) => {
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

export default memo(Timer)
