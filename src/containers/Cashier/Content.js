import React from 'react'

// import { ICON_CMD } from '@config'
import PaymentContent from './PaymentContent'
import QuestionContent from './QuestionContent'

import { Wrapper } from './styles/content'

const Componet = ({
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

export default Componet
