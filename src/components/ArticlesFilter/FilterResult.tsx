import { FC, memo } from 'react'

import { LavaLampLoading } from '@/components/Loading'
import { Space } from '@/components/Common'

import { Wrapper, ResultText } from './styles/filter_result'

type TProps = {
  totalCount: number
}

const FilterResult: FC<TProps> = ({ totalCount }) => {
  return (
    <Wrapper>
      <LavaLampLoading />
      <Space right={20} />
      <ResultText>共 {totalCount} 条</ResultText>
    </Wrapper>
  )
}

export default memo(FilterResult)
