import { FC, memo } from 'react'

import Button from '@/widgets/Buttons/Button'
import FormItem from '@/widgets/FormItem'

import type { TProps as TContentProps } from './Content'
import { Wrapper, Desc, BtnWrapper } from './styles/payment_confirm'
import { transferAccountChange, onPaymentConfirm } from './logic'

const trans = {
  WECHAT: '微信支付',
  ALIPAY: '支付宝',
}

type TProps = Pick<TContentProps, 'paymentMethod' | 'transferAccount'>

const PaymentConfirm: FC<TProps> = ({ paymentMethod, transferAccount }) => {
  return (
    <Wrapper>
      <FormItem
        size="small"
        value={transferAccount}
        placeholder={`${trans[paymentMethod]}账号`}
        onChange={transferAccountChange}
        bottom={0}
      />
      <Desc>
        感谢打赏！最后请正确填写您的
        {trans[paymentMethod]}
        账户名以便核实，我们将在 0~24 小时内为您办理相关服务。
      </Desc>
      <BtnWrapper>
        <Button type="primary" onClick={onPaymentConfirm}>
          提交
        </Button>
      </BtnWrapper>
    </Wrapper>
  )
}

export default memo(PaymentConfirm)
