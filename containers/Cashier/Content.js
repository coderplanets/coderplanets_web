import React from 'react'

// import { ICON_CMD } from '../../config'
import PaymentContent from './PaymentContent'
import QuestionContent from './QuestionContent'

import { Wrapper } from './styles/content'

const Componet = ({
  contentView,
  faceValue,
  payMethod,
  subContentView,
  transferAccount,
}) => {
  switch (contentView) {
    case 'question': {
      return <QuestionContent />
    }
    default: {
      return (
        <Wrapper>
          <PaymentContent
            faceValue={faceValue}
            payMethod={payMethod}
            subContentView={subContentView}
            transferAccount={transferAccount}
          />
        </Wrapper>
      )
    }
  }
}

export default Componet
