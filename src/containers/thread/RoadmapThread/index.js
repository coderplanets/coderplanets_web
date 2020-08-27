//

/*
 *
 * RoadmapThread
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import TodoList from './TodoList'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RoadmapThread')

const RoadmapThreadContainer = ({ roadmapThread: store }) => {
  useInit(store)

  return (
    <Wrapper testId="roadmapThread">
      <TodoList label="计划中" />
      <TodoList label="开发中" />
    </Wrapper>
  )
}

export default connectStore(RoadmapThreadContainer)
