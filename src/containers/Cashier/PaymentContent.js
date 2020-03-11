import React from 'react'

import { ICON_BASE } from '@config'

// import { ICON_CMD } from '@config'
import PaymentConfirm from './PaymentConfirm'

import {
  Wrapper,
  CountDesc,
  DescNumber,
  PaymentPic,
  NextDesc,
  NextStepBtn,
} from './styles/payment_content'

import { subContentViewOnChange } from './logic'

const QR_CODE_ADDR = {
  ALIPAY: {
    '10.24': `${ICON_BASE}/payment/alipay-10.24.png`,
    '51.2': `${ICON_BASE}/payment/alipay-51.2.png`,
    '102.4': `${ICON_BASE}/payment/alipay-102.4.png`,
    '512': `${ICON_BASE}/payment/alipay-512.png`,
    '1024': `${ICON_BASE}/payment/alipay-1024.png`,
  },
  WECHAT: {
    '10.24': `${ICON_BASE}/payment/wechat-10.24.png`,
    '51.2': `${ICON_BASE}/payment/wechat-51.2.png`,
    '102.4': `${ICON_BASE}/payment/wechat-102.4.png`,
    '512': `${ICON_BASE}/payment/wechat-512.png`,
    '1024': `${ICON_BASE}/payment/wechat-1024.png`,
  },
}

const PaymentContent = ({
  amount,
  paymentMethod,
  subContentView,
  transferAccount,
}) => {
  switch (subContentView) {
    case 'confirm':
      return (
        <PaymentConfirm
          paymentMethod={paymentMethod}
          transferAccount={transferAccount}
        />
      )

    default:
      return (
        <Wrapper>
          <CountDesc>
            资助 <DescNumber>{amount} </DescNumber>元
          </CountDesc>
          <PaymentPic src={QR_CODE_ADDR[paymentMethod][amount]} />
          <NextDesc>
            付款完成后，请进入
            <NextStepBtn onClick={subContentViewOnChange.bind(this, 'confirm')}>
              下一步
            </NextStepBtn>
          </NextDesc>
        </Wrapper>
      )
  }
}
// <Button type="primary">下一步</Button>

export default React.memo(PaymentContent)
