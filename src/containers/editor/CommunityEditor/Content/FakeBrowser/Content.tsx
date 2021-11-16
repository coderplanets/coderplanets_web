import { FC, memo } from 'react'
import { includes } from 'ramda'

import NoticeBar from '@/widgets/NoticeBar'
import communityIntros from '../communityIntros'

import type { TStep, TCommunityType } from '../../spec'
import { STEP, COMMUNITY_TYPE } from '../../constant'

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
  step: TStep
  title?: string
  desc?: string
  logo?: string | null
  domain?: string | null
  communityType: TCommunityType
}

const Content: FC<TProps> = ({
  step,
  title = '',
  desc = '',
  logo,
  domain = null,
  communityType,
}) => {
  if (
    includes(communityType, [COMMUNITY_TYPE.WORKS, COMMUNITY_TYPE.TEAM]) &&
    step === STEP.SETUP_DOMAIN
  ) {
    const customDomain = domain || 'my-domain'

    return (
      <Wrapper>
        <NoticeBar
          type="info"
          content={`绑定域名功能即将开放，届时社区功能会开放给你的自主域名，比如：forum.${customDomain}.com, 敬请期待。`}
          top={8}
          left={95}
          right={30}
          noBg
        />
      </Wrapper>
    )
  }

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
