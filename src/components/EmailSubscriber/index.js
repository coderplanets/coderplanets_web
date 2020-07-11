/*
 *
 * EmailSubscriber
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import {
  Wrapper,
  SubscribeInput,
  SubscribeBtnWrapper,
  SubscribeBtn,
  SubscribeText,
  SubscribeCancel,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmailSubscriber:index')

const EmailSubscriber = ({ testid, withHoverHint }) => {
  return (
    <Wrapper testid={testid}>
      <SubscribeInput />
      <SubscribeBtnWrapper>
        <SubscribeBtn>订阅</SubscribeBtn>
      </SubscribeBtnWrapper>
      {withHoverHint && (
        <SubscribeText>
          订阅后会不定期推送社区开发及运营动态，欢迎订阅（可随时
          <SubscribeCancel>取消</SubscribeCancel>）。
        </SubscribeText>
      )}
    </Wrapper>
  )
}

EmailSubscriber.propTypes = {
  testid: T.string,
  withHoverHint: T.bool,
}

EmailSubscriber.defaultProps = {
  testid: 'emailSubscriber',
  withHoverHint: false,
}

export default React.memo(EmailSubscriber)
