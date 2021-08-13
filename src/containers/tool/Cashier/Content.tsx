import { FC, memo } from 'react'

// import { ICON_CMD } from '@/config'
import PaymentContent from './PaymentContent'
import QuestionContent from './QuestionContent'

import type { TContentView, TAmount, TSubContentView } from './spec'
import { Wrapper } from './styles/content'

export type TProps = {
  contentView: TContentView
  subContentView: TSubContentView
  amount: TAmount
  paymentMethod: string // todo
  transferAccount: string // TODO
}

const Componet: FC<TProps> = ({
  contentView,
  amount,
  paymentMethod,
  subContentView,
  transferAccount,
}) => {
  switch (contentView) {
    case 'question':
      return <QuestionContent />

    default:
      return (
        <Wrapper>
          <PaymentContent
            amount={amount}
            paymentMethod={paymentMethod}
            subContentView={subContentView}
            transferAccount={transferAccount}
          />
        </Wrapper>
      )
  }
}

export default memo(Componet)
