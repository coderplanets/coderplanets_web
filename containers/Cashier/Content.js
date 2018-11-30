import React from 'react'

// import { ICON_CMD } from '../../config'
import PaymentContent from './PaymentContent'
import QuestionContent from './QuestionContent'

import { Wrapper } from './styles/content'

const Componet = ({ contentView }) => {
  switch (contentView) {
    case 'question': {
      return <QuestionContent />
    }
    default: {
      return (
        <Wrapper>
          <PaymentContent />
        </Wrapper>
      )
    }
  }
}

export default Componet
