import { FC, memo } from 'react'

import type { TCommunityThread, TThread } from '@/spec'
import { Wrapper, Title } from '../styles/simple_layout/thread_tab'

type TProps = {
  threads: TCommunityThread[]
  active: string
  onChange: (thread: TThread) => void
}

const ThreadTab: FC<TProps> = ({ active, threads, onChange }) => {
  return (
    <Wrapper>
      {threads.map((item) => (
        <Title
          key={item.raw}
          $active={active === item.raw}
          onClick={() => onChange(item.raw)}
        >
          {item.title}
        </Title>
      ))}
    </Wrapper>
  )
}

export default memo(ThreadTab)
