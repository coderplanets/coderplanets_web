import { FC, memo } from 'react'

import {
  Wrapper,
  ResultText,
  ResultDivider,
  MoreOptionWrapper,
  FaqText,
} from './styles/filter_result'

type TProps = {
  totalCount: number
  faqActive: boolean
  onFaqChange: () => void
}

const FilterResult: FC<TProps> = ({ totalCount, onFaqChange, faqActive }) => {
  return (
    <Wrapper>
      <ResultText>共 {totalCount} 条</ResultText>
      <ResultDivider />

      <MoreOptionWrapper>
        <FaqText active={faqActive} onClick={onFaqChange}>
          帮助中心
        </FaqText>
      </MoreOptionWrapper>
    </Wrapper>
  )
}

export default memo(FilterResult)
