import { FC, memo } from 'react'

import { Wrapper, Title } from '../styles/simple_layout/thread_tab'

const ThreadTab: FC = () => {
  return (
    <Wrapper>
      <Title $active>讨论</Title>
      <Title>看板</Title>
      <Title>更新日志</Title>
      <Title>帮助台</Title>
      <Title>关于</Title>
    </Wrapper>
  )
}

export default memo(ThreadTab)
