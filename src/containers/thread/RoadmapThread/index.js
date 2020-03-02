//

/*
 *
 * RoadmapThread
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@utils'

import { Wrapper } from './styles'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RoadmapThread')

const RoadmapThreadContainer = ({ roadmapThread }) => {
  useInit(roadmapThread)

  return (
    <Wrapper testid="roadmapThread">
      <h2>RoadmapThread hooks container!</h2>
      <div>impress me!</div>
    </Wrapper>
  )
}

export default connectStore(RoadmapThreadContainer)
