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
  UpvoteWrapper,
} from '../styles/right_sidebar/interviews_list'

const icon = 'https://cps-oss.oss-cn-shanghai.aliyuncs.com/works/market1.jpeg'

const Interview: React.FC = () => {
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
      <UpvoteWrapper>
        <IconText iconSrc={`${ICON}/article/heart-solid.svg`} margin="5px">
          17
        </IconText>
      </UpvoteWrapper>
    </InterviewWrapper>
  )
}

type TProps = {
  testid?: string
}

const InterviewsList: React.FC<TProps> = ({
  testid = 'works-content-interviews',
}) => {
  return (
    <Wrapper testid={testid}>
      <Interview />
      <Interview />
      <Interview />
      <Interview />
      <Interview />
    </Wrapper>
  )
}

export default InterviewsList
