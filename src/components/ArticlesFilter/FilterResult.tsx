import { FC, memo } from 'react'

import { Wrapper, ResultText } from './styles/filter_result'

type TProps = {
  totalCount: number
}

const FilterResult: FC<TProps> = ({ totalCount }) => {
  return (
    <Wrapper>
      <ResultText>共 {totalCount} 条</ResultText>
    </Wrapper>
  )
}

export default memo(FilterResult)
