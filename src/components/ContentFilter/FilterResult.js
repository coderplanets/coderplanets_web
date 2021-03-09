import React from 'react'

import {
  Wrapper,
  ResultText,
  ResultDivider,
  MoreOptionWrapper,
  FaqText,
} from './styles/filter_result'

const FilterResult = ({ totalCount, onFaqChange, faqActive }) => {
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

export default React.memo(FilterResult)
