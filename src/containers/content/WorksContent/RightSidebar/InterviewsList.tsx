import { FC } from 'react'

import { SpaceGrow } from '@/widgets/Common'
import ImgFallback from '@/widgets/ImgFallback'

import {
  Wrapper,
  InterviewWrapper,
  Avatar,
  Intro,
  Title,
  UpvoteWrapper,
  UpvoteIcon,
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
        <UpvoteIcon />
        17
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
      <Interview />
      <Interview />
      <Interview />
    </Wrapper>
  )
}

export default InterviewsList
