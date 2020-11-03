/*
 *
 * NotifyButton
 *
 */

import React from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { buildLog } from '@/utils'

import Tooltip from '@/components/Tooltip'

import {
  Wrapper,
  Main,
  NotifyOnIcon,
  NotifyOffIcon,
  Title,
  Desc,
  Focus,
} from '../styles/notify_button'

/* eslint-disable-next-line */
const log = buildLog('c:NotifyButton:index')

const NotifyButton = ({ testId, subscribed }) => {
  return (
    <Wrapper testId={testId}>
      {subscribed ? (
        <Main>
          <NotifyOnIcon src={`${ICON}/article/notify-on.svg`} />
          <Tooltip
            content={
              <Desc>
                当前<Focus>已订阅</Focus>，你将能在<Focus>站内消息</Focus>或
                <Focus>邮件</Focus>中收到提醒。
              </Desc>
            }
            placement="bottom"
            delay={1000}
          >
            <Title active>已订阅</Title>
          </Tooltip>
        </Main>
      ) : (
        <Main>
          <NotifyOffIcon src={`${ICON}/article/notify-off.svg`} />
          <Tooltip
            content={
              <Desc>
                当前<Focus>未订阅</Focus>， 订阅后你将能在
                <Focus>站内消息</Focus>或<Focus>邮件</Focus>
                中收到提醒 。
              </Desc>
            }
            placement="bottom"
            delay={1000}
          >
            <Title>未订阅</Title>
          </Tooltip>
        </Main>
      )}
      {/* <Desc>当前未订阅，订阅后你将能在站内消息或邮件中收到提醒。</Desc> */}
    </Wrapper>
  )
}

NotifyButton.propTypes = {
  testId: T.string,
  subscribed: T.bool,
}

NotifyButton.defaultProps = {
  testId: 'notify-button',
  subscribed: false,
}

export default React.memo(NotifyButton)
