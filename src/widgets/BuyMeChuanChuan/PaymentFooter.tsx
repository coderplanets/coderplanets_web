import { FC, memo } from 'react'

import { ICON_CMD } from '@/config'
import Button from '../Buttons/Button'

import {
  Wrapper,
  PayDesc,
  AliPay,
  Weixin,
  MoneyNum,
  PaymentIcon,
} from './styles/payment_footer'

type TProps = {
  num: number
  onPay: (m: number) => void
}

const PaymentFooter: FC<TProps> = ({ num, onPay }) => {
  return (
    <Wrapper>
      <PayDesc>
        支持:
        <AliPay>
          <PaymentIcon src={`${ICON_CMD}/alipay-color.svg`} />
        </AliPay>
        |
        <Weixin>
          <PaymentIcon src={`${ICON_CMD}/weichat-color.svg`} />
        </Weixin>
      </PayDesc>
      <Button type="red" onClick={() => onPay(num * 10.24)}>
        资助 <MoneyNum>￥{num * 10.24} 元</MoneyNum>
      </Button>
    </Wrapper>
  )
}

export default memo(PaymentFooter)
