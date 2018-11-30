import React from 'react'
import { Icon } from 'antd'

import { ICON_CMD } from '../../config'
import {
  Wrapper,
  TransWrapper,
  AccountIcon,
  TransIcon,
  SiteLogo,
  SelectorWrapper,
  SelectorTitle,
  TitleDivider,
  WeixinWrapper,
  AliWrapper,
  QuestionDivider,
  QuestionWrapper,
  OptionTitle,
} from './styles/payment_sidebar'

import { sidebarViewOnChange, payMethodOnChange } from './logic'

const PaymentSidebar = ({ accountInfo, payMethod }) => (
  <Wrapper>
    <TransWrapper>
      <AccountIcon src={accountInfo.avatar} />
      <TransIcon src={`${ICON_CMD}/payment_transfer.svg`} />
      <SiteLogo src={`${ICON_CMD}/keyboard_logo.png`} />
    </TransWrapper>

    <SelectorWrapper>
      <SelectorTitle>付款方式</SelectorTitle>
      <TitleDivider />
      <AliWrapper
        active={payMethod === 'alipay'}
        onClick={payMethodOnChange.bind(this, 'alipay')}
      >
        <Icon type="alipay-circle" />
        <OptionTitle>支付宝</OptionTitle>
      </AliWrapper>
      <WeixinWrapper
        active={payMethod === 'wechat'}
        onClick={payMethodOnChange.bind(this, 'wechat')}
      >
        <Icon type="wechat" />
        <OptionTitle>微信支付</OptionTitle>
      </WeixinWrapper>
      <QuestionDivider />
      <QuestionWrapper onClick={sidebarViewOnChange.bind(this, 'question')}>
        <Icon type="question-circle" />
        <OptionTitle>常见问题</OptionTitle>
      </QuestionWrapper>
    </SelectorWrapper>
  </Wrapper>
)

export default PaymentSidebar
