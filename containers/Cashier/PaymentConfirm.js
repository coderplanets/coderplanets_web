import React from 'react'
import { Button } from 'antd'
// import { ICON_CMD } from '../../config'

import { FormItem } from '../../components'
import { Wrapper, Desc, BtnWrapper } from './styles/payment_confirm'

import { transferAccountChange } from './logic'

const trans = {
  wechat: '微信支付',
  alipay: '支付宝',
}

const PaymentConfirm = ({ paymentMethod, transferAccount }) => (
  <Wrapper>
    <FormItem
      size="default"
      value={transferAccount}
      placeholder={`${trans[paymentMethod]}账号`}
      onChange={transferAccountChange}
      bottom="0"
    />
    <Desc>
      请填写您的
      {trans[paymentMethod]}
      账号，我们将在一个工作日内绑定。
    </Desc>
    <BtnWrapper>
      <Button type="primary">提交</Button>
    </BtnWrapper>
  </Wrapper>
)

export default PaymentConfirm
