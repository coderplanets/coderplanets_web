import React from 'react'
// import { Button } from 'antd'

import { ICON_BASE } from '../../config'

// import { ICON_CMD } from '../../config'
import {
  Wrapper,
  CountDesc,
  DescNumber,
  PaymentPic,
  WarningDesc,
} from './styles/payment_content'

const PaymentContent = () => (
  <Wrapper>
    <CountDesc>
      付款 <DescNumber>10.24 </DescNumber>元
    </CountDesc>
    <PaymentPic src={`${ICON_BASE}/payment/alipay-10_24.png`} />
    <WarningDesc>付款后请勿关闭窗口</WarningDesc>
  </Wrapper>
)
// <Button type="primary">下一步</Button>

export default PaymentContent
