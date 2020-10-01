import React from 'react'

import {
  Wrapper,
  InterviewWrapper,
  Avatar,
  Intro,
  Title,
  Author,
} from '../styles/right_sidebar/interviews_list'

const icon = 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/works/market1.jpeg'

const Interview = () => {
  return (
    <InterviewWrapper>
      <Avatar src={icon} />
      <Intro>
        <Title>聊聊开发一个社区的故事</Title>
        <Author>mydearxym</Author>
      </Intro>
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
