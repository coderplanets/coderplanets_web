import { FC, memo } from 'react'

import DotDivider from '@/widgets/DotDivider'

import { Wrapper, ResultText } from './styles/filter_result'

type TProps = {
  totalCount: number
  pageNumber: number
}

const FilterResult: FC<TProps> = ({ pageNumber, totalCount }) => {
  return (
    <Wrapper>
      <ResultText>第 {pageNumber} 页</ResultText>
      <DotDivider space={8} />
      <ResultText>共 {totalCount} 条</ResultText>
    </Wrapper>
  )
}

export default memo(FilterResult)
