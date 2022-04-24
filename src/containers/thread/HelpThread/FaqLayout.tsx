import { FC, memo } from 'react'

import FaqList from '@/widgets/FaqList'
import { Wrapper } from './styles/faq_layout'

type TProps = {
  testid?: string
}

const FaqLayout: FC<TProps> = ({ testid = 'FaqLayout' }) => {
  return (
    <Wrapper>
      <FaqList mode="collapse" />
    </Wrapper>
  )
}

export default memo(FaqLayout)
