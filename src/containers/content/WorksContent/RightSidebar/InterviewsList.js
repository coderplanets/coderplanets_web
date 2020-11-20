import React from 'react'

import { ICON } from '@/config'
import { SpaceGrow } from '@/components/Common'
import ImgFallback from '@/components/ImgFallback'
import IconText from '@/components/IconText'

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
      <Avatar
        src={icon}
        fallback={<ImgFallback user={{ nickname: 'fake' }} size={20} top={1} />}
      />
      <Intro>
        <Title>groupher</Title>
      </Intro>
      <SpaceGrow />
      {/* upvote */}
      <IconText iconSrc={`${ICON}/article/heart-solid.svg`} margin="5px">
        17
      </IconText>
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
