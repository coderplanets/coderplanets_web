import React from 'react'

// import { ICON_CMD } from 'config'
import { THREAD } from 'utils'
import {
  Wrapper,
  Selector,
  VideoSelector,
  RepoSelector,
} from './styles/thread_select_bar'
import { searchThreadOnChange } from './logic'

const ThreadSelectBar = ({ active }) => (
  <Wrapper>
    <Selector
      onClick={searchThreadOnChange.bind(this, 'community')}
      active={active === 'community'}
    >
      社区
    </Selector>
    <Selector
      onClick={searchThreadOnChange.bind(this, THREAD.POST)}
      active={active === THREAD.POST}
    >
      帖子
    </Selector>
    <VideoSelector
      onClick={searchThreadOnChange.bind(this, THREAD.VIDEO)}
      active={active === THREAD.VIDEO}
    >
      视频
    </VideoSelector>
    <RepoSelector
      onClick={searchThreadOnChange.bind(this, THREAD.REPO)}
      active={active === THREAD.REPO}
    >
      项目
    </RepoSelector>
    <Selector
      onClick={searchThreadOnChange.bind(this, THREAD.JOB)}
      active={active === THREAD.JOB}
    >
      工作
    </Selector>
    <Selector
      onClick={searchThreadOnChange.bind(this, 'user')}
      active={active === 'user'}
    >
      用户
    </Selector>
  </Wrapper>
)

export default ThreadSelectBar
