import { FC, memo } from 'react'

import PaymentSidebar from './PaymentSidebar'
import QuestionSidebar from './QuestionSidebar'

import type { TProps as TContentProps } from './Content'
import type { TContentView } from './spec'
import { Wrapper } from './styles/sidebar'

type TProps = Pick<
  TContentProps,
  'amount' | 'paymentMethod' | 'subContentView'
> & { sidebarView: TContentView }

const Sidebar: FC<TProps> = ({
  sidebarView,
  amount,
  paymentMethod,
  subContentView,
}) => {
  switch (sidebarView) {
    case 'question':
      return (
        <Wrapper>
          <QuestionSidebar />
        </Wrapper>
      )

    default:
      return (
        <Wrapper>
          <PaymentSidebar
            paymentMethod={paymentMethod}
            amount={amount}
            subContentView={subContentView}
          />
        </Wrapper>
      )
  }
}

export default memo(Sidebar)
