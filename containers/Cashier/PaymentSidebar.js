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
  Holder,
  QuestionWrapper,
  OptionTitle,
  FaceValueWrapper,
  FaceValueNum,
} from './styles/payment_sidebar'

import { PAYMENT_METHOD } from '../../utils'
import { sidebarViewOnChange, paymentMethodOnChange } from './logic'

const PaymentSidebar = ({
  accountInfo,
  paymentMethod,
  faceValue,
  subContentView,
}) => (
  <Wrapper>
    <TransWrapper>
      <AccountIcon src={accountInfo.avatar} />
      <TransIcon src={`${ICON_CMD}/payment_transfer.svg`} />
      <SiteLogo src={`${ICON_CMD}/keyboard_logo.png`} />
    </TransWrapper>

    {subContentView === 'confirm' ? (
      <SelectorWrapper>
        <SelectorTitle>付款方式</SelectorTitle>
        <TitleDivider />
        <AliWrapper
          active={paymentMethod === PAYMENT_METHOD.ALIPAY}
          display={paymentMethod === PAYMENT_METHOD.ALIPAY ? 'block' : 'none'}
        >
          <Icon type="alipay-circle" />
          <OptionTitle>支付宝</OptionTitle>
        </AliWrapper>
        <Holder margin="20px" />
        <WeixinWrapper
          active={paymentMethod === PAYMENT_METHOD.WECHAT}
          display={paymentMethod === PAYMENT_METHOD.WECHAT ? 'block' : 'none'}
        >
          <Icon type="wechat" />
          <OptionTitle>微信支付</OptionTitle>
        </WeixinWrapper>

        <SelectorTitle>付款金额</SelectorTitle>
        <TitleDivider />
        <FaceValueWrapper>
          <FaceValueNum>{faceValue}</FaceValueNum> 元
        </FaceValueWrapper>
        <Holder />
      </SelectorWrapper>
    ) : (
      <SelectorWrapper>
        <SelectorTitle>付款方式</SelectorTitle>
        <TitleDivider />
        <AliWrapper
          active={paymentMethod === PAYMENT_METHOD.ALIPAY}
          onClick={paymentMethodOnChange.bind(this, PAYMENT_METHOD.ALIPAY)}
        >
          <Icon type="alipay-circle" />
          <OptionTitle>支付宝</OptionTitle>
        </AliWrapper>
        <WeixinWrapper
          active={paymentMethod === PAYMENT_METHOD.WECHAT}
          onClick={paymentMethodOnChange.bind(this, PAYMENT_METHOD.WECHAT)}
        >
          <Icon type="wechat" />
          <OptionTitle>微信支付</OptionTitle>
        </WeixinWrapper>
        <Holder />
        <QuestionWrapper onClick={sidebarViewOnChange.bind(this, 'question')}>
          <Icon type="question-circle" />
          <OptionTitle>常见问题</OptionTitle>
        </QuestionWrapper>
      </SelectorWrapper>
    )}
  </Wrapper>
)

export default PaymentSidebar
