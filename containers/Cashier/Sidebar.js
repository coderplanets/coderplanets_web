import React from 'react'

// import { ICON_CMD } from '../../config'
import PaymentSidebar from './PaymentSidebar'
import QuestionSidebar from './QuestionSidebar'

import { Wrapper } from './styles/sidebar'

const Sidebar = ({
  accountInfo,
  sidebarView,
  faceValue,
  paymentMethod,
  subContentView,
}) => {
  switch (sidebarView) {
    case 'question': {
      return (
        <Wrapper>
          <QuestionSidebar />
        </Wrapper>
      )
    }
    default: {
      return (
        <Wrapper>
          <PaymentSidebar
            accountInfo={accountInfo}
            paymentMethod={paymentMethod}
            faceValue={faceValue}
            subContentView={subContentView}
          />
        </Wrapper>
      )
    }
  }
}

export default Sidebar
