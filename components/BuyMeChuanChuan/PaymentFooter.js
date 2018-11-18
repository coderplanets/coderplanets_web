import React from 'react'
import { Button, Icon } from 'antd'

import {
  Wrapper,
  PayDesc,
  AliPay,
  Weixin,
  MoneyNum,
} from './styles/payment_footer'

const PaymentFooter = ({ num }) => (
  <Wrapper>
    <PayDesc>
      支持:
      <AliPay>
        <Icon type="alipay-circle" />
        支付宝
      </AliPay>
      |
      <Weixin>
        <Icon type="wechat" /> 微信支付
      </Weixin>
    </PayDesc>
    <Button type="red">
      资助 <MoneyNum>￥{num * 10.24} 元</MoneyNum>
    </Button>
  </Wrapper>
)

export default PaymentFooter
