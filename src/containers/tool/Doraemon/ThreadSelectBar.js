import React from 'react'

import { THREAD } from '@/constant'

import { Wrapper, Selector, RepoSelector } from './styles/thread_select_bar'

import { searchThreadOnChange } from './logic'

const ThreadSelectBar = ({ active }) => (
  <Wrapper>
    <Selector
      onClick={() => searchThreadOnChange('community')}
      active={active === 'community'}
    >
      社区
    </Selector>
    <Selector
      onClick={() => searchThreadOnChange(THREAD.POST)}
      active={active === THREAD.POST}
    >
      帖子
    </Selector>
    <RepoSelector
      onClick={() => searchThreadOnChange(THREAD.REPO)}
      active={active === THREAD.REPO}
    >
      项目
    </RepoSelector>
    <Selector
      onClick={() => searchThreadOnChange(THREAD.JOB)}
      active={active === THREAD.JOB}
    >
      工作
    </Selector>
    <Selector
      onClick={() => searchThreadOnChange('user')}
      active={active === 'user'}
    >
      用户
    </Selector>
  </Wrapper>
)

export default React.memo(ThreadSelectBar)
