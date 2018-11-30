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

import { sidebarViewOnChange, payMethodOnChange } from './logic'

const PaymentSidebar = ({
  accountInfo,
  payMethod,
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
          active={payMethod === 'alipay'}
          display={payMethod === 'alipay' ? 'block' : 'none'}
        >
          <Icon type="alipay-circle" />
          <OptionTitle>支付宝</OptionTitle>
        </AliWrapper>
        <Holder margin="20px" />
        <WeixinWrapper
          active={payMethod === 'wechat'}
          display={payMethod === 'wechat' ? 'block' : 'none'}
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
