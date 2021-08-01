//

/*
 *
 * RoadmapThread
 *
 */

import React from 'react'

import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import TodoList from './TodoList'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RoadmapThread')

const RoadmapThreadContainer = ({ roadmapThread: store }) => {
  useInit(store)

  return (
    <Wrapper testid="roadmapThread">
      <TodoList label="计划中" />
      <TodoList label="开发中" />
    </Wrapper>
  )
}

export default pluggedIn(RoadmapThreadContainer)
