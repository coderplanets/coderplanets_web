import { FC, memo } from 'react'

import NoticeBar from '@/widgets/NoticeBar'
import communityIntros from '../communityIntros'

import type { TStep, TCommunityType } from '../../spec'
import { STEP } from '../../constant'

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
  if (step === STEP.SETUP_DOMAIN) {
    const customDomain = domain || 'my-domain'

    return (
      <Wrapper>
        <NoticeBar
          type="info"
          content={`绑定域名功能正在开发中，届时所有社区功能将开放给自定义域名，比如：forum.${customDomain}.com, 敬请期待。`}
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
