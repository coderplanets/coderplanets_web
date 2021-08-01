import React from 'react'

import { ICON_CMD } from '@/config'
import Button from '@/components/Buttons/Button'

import {
  Wrapper,
  PayDesc,
  AliPay,
  Weixin,
  MoneyNum,
  PaymentIcon,
} from './styles/payment_footer'

const PaymentFooter = ({ num, onPay }) => (
  <Wrapper>
    <PayDesc>
      支持:
      <AliPay>
        <PaymentIcon src={`${ICON_CMD}/alipay-color.svg`} />
        支付宝
      </AliPay>
      |
      <Weixin>
        <PaymentIcon src={`${ICON_CMD}/weichat-color.svg`} /> 微信支付
      </Weixin>
    </PayDesc>
    <Button type="red" onClick={() => onPay(num * 10.24)}>
      资助 <MoneyNum>￥{num * 10.24} 元</MoneyNum>
    </Button>
  </Wrapper>
)

export default React.memo(PaymentFooter)
