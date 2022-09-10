import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import { PAYMENT_METHOD } from '@/constant'
import useAccount from '@/hooks/useAccount'

import type { TProps as TContentProps } from './Content'
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
  PaymentIcon,
  QuestionIcon,
} from './styles/payment_sidebar'

import { sidebarViewOnChange, paymentMethodOnChange } from './logic'

type TProps = Pick<TContentProps, 'amount' | 'paymentMethod' | 'subContentView'>

const PaymentSidebar: FC<TProps> = ({
  paymentMethod,
  amount,
  subContentView,
}) => {
  const accountInfo = useAccount()

  if (!accountInfo) return null

  return (
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
            show={paymentMethod === PAYMENT_METHOD.ALIPAY}
          >
            <PaymentIcon src={`${ICON_CMD}/alipay-color.svg`} />
            <OptionTitle>支付宝</OptionTitle>
          </AliWrapper>
          <Holder margin="20px" />
          <WeixinWrapper
            active={paymentMethod === PAYMENT_METHOD.WECHAT}
            show={paymentMethod === PAYMENT_METHOD.WECHAT}
          >
            <PaymentIcon src={`${ICON_CMD}/weichat-color.svg`} /> 微信支付
            <OptionTitle>微信支付</OptionTitle>
          </WeixinWrapper>

          <SelectorTitle>付款金额</SelectorTitle>
          <TitleDivider />
          <FaceValueWrapper>
            <FaceValueNum>{amount}</FaceValueNum> 元
          </FaceValueWrapper>
          <Holder />
        </SelectorWrapper>
      ) : (
        <SelectorWrapper>
          <SelectorTitle>付款方式</SelectorTitle>
          <TitleDivider />
          <AliWrapper
            active={paymentMethod === PAYMENT_METHOD.ALIPAY}
            onClick={() => paymentMethodOnChange(PAYMENT_METHOD.ALIPAY)}
          >
            <PaymentIcon src={`${ICON_CMD}/alipay-color.svg`} />
            <OptionTitle>支付宝</OptionTitle>
          </AliWrapper>
          <WeixinWrapper
            active={paymentMethod === PAYMENT_METHOD.WECHAT}
            onClick={() => paymentMethodOnChange(PAYMENT_METHOD.WECHAT)}
          >
            <PaymentIcon src={`${ICON_CMD}/weichat-color.svg`} />
            <OptionTitle>微信支付</OptionTitle>
          </WeixinWrapper>
          <Holder />
          <QuestionWrapper onClick={() => sidebarViewOnChange('question')}>
            <QuestionIcon src={`${ICON_CMD}/question-mark.svg`} />
            <OptionTitle>常见问题</OptionTitle>
          </QuestionWrapper>
        </SelectorWrapper>
      )}
    </Wrapper>
  )
}

export default memo(PaymentSidebar)
