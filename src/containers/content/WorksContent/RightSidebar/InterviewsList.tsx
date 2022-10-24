import { FC } from 'react'

import { SpaceGrow } from '@/widgets/Common'

import {
  Wrapper,
  InterviewWrapper,
  AvatarHolder,
  Intro,
  Title,
  UpvoteWrapper,
  UpvoteIcon,
} from '../styles/right_sidebar/interviews_list'

// const icon = 'https://assets.groupher.com/works/market1.jpeg'

const Interview: React.FC = () => {
  return (
    <InterviewWrapper>
      <AvatarHolder />
      <Intro>
        <Title>征集中...</Title>
      </Intro>
      <SpaceGrow />
      {/* upvote */}
      <UpvoteWrapper>
        <UpvoteIcon />
        99
      </UpvoteWrapper>
    </InterviewWrapper>
  )
}

type TProps = {
  testid?: string
}

const InterviewsList: FC<TProps> = ({
  testid = 'works-content-interviews',
}) => {
  return (
    <Wrapper testid={testid}>
      <Interview />
      <Interview />
    </Wrapper>
  )
}

export default InterviewsList
