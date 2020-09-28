/*
 *
 * EmailSubscriber
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import EmailHintIcon from './EmailHintIcon'

import {
  Wrapper,
  InnerWrapper,
  HintHolder,
  // SubscribeInput,
  // SubscribeBtnWrapper,
  // SubscribeBtn,
} from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:EmailSubscriber:index')

const EmailSubscriber = ({ testId }) => {
  return (
    <Wrapper testId={testId}>
      {/* <EmailIcon src={`${ICON}/email_envelope.svg`} /> */}
      <EmailHintIcon />
      <InnerWrapper>
        <HintHolder>邮件订阅</HintHolder>
        {/* <SubscribeInput placeholder="邮件订阅" /> */}
      </InnerWrapper>
      {/* <SubscribeBtnWrapper>
        <SubscribeBtn size="small">邮件订阅</SubscribeBtn>
      </SubscribeBtnWrapper> */}
    </Wrapper>
  )
}

EmailSubscriber.propTypes = {
  testId: T.string,
  // withHoverHint: T.bool,
}

EmailSubscriber.defaultProps = {
  testId: 'emailSubscriber',
  // withHoverHint: false,
}

export default React.memo(EmailSubscriber)
