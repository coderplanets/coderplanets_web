import { FC, memo } from 'react'

import type { TCommunityType } from '../../spec'
import communityIntros from '../communityIntros'

import {
  Wrapper,
  BannerWrapper,
  IconBlock,
  RealLogo,
  Intro,
  Title,
  Desc,
  ThreadWrapper,
  ThreadItem,
  FeedWrapper,
  Feed,
} from '../../styles/content/fake_browser/content'

type TProps = {
  title?: string
  desc?: string
  logo?: string | null
  communityType: TCommunityType
}

const Content: FC<TProps> = ({
  title = '',
  desc = '',
  logo,
  communityType,
}) => {
  return (
    <Wrapper>
      <BannerWrapper>
        {logo ? <RealLogo src={logo} /> : <IconBlock />}
        <Intro>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Intro>
        {communityType && (
          <ThreadWrapper>
            {communityIntros[communityType].threads.map((thread) => (
              <ThreadItem key={thread}>{thread}</ThreadItem>
            ))}
          </ThreadWrapper>
        )}
      </BannerWrapper>
      <FeedWrapper>
        <Feed width="50%" />
        <Feed width="40%" />
        <Feed width="80%" />
        <Feed width="30%" />
      </FeedWrapper>
    </Wrapper>
  )
}

export default memo(Content)
