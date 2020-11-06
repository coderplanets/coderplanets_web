import React from 'react'

import { SpaceGrow } from '@/components/Common'
import UpVote from '../UpVote'

import {
  Wrapper,
  InterviewWrapper,
  Avatar,
  Intro,
  Title,
} from '../styles/right_sidebar/interviews_list'

const icon = 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/works/market1.jpeg'

const Interview = () => {
  return (
    <InterviewWrapper>
      <Avatar src={icon} />
      <Intro>
        <Title>groupher</Title>
      </Intro>
      <SpaceGrow />
      <UpVote num={17} size="small" />
    </InterviewWrapper>
  )
}

const InterviewsList = () => {
  return (
    <Wrapper>
      <Interview />
      <Interview />
      <Interview />
      <Interview />
      <Interview />
    </Wrapper>
  )
}

export default InterviewsList
