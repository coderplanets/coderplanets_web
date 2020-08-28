import React from 'react'

import Tooltip from '@/components/Tooltip'

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
        {faqActive ? (
          <FaqText active={faqActive} onClick={onFaqChange}>
            FAQ
          </FaqText>
        ) : (
          <Tooltip content="常见问题" placement="bottom" delay={300}>
            <FaqText active={faqActive} onClick={onFaqChange}>
              FAQ
            </FaqText>
          </Tooltip>
        )}
      </MoreOptionWrapper>
    </Wrapper>
  )
}

export default React.memo(FilterResult)
