import { FC, memo } from 'react'

import { Wrapper } from './styles/filters'

const Filters: FC = () => {
  return (
    <Wrapper>
      <h3>新功能</h3>
      <h3>修复改进</h3>
      <h3>预发布</h3>
    </Wrapper>
  )
}

export default memo(Filters)
