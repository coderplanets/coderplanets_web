import { FC, memo } from 'react'

import {
  Wrapper,
  BannerWrapper,
  IconBlock,
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
}

const Content: FC<TProps> = ({ title = '', desc = '' }) => {
  return (
    <Wrapper>
      <BannerWrapper>
        <IconBlock />
        <Intro>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Intro>
        <ThreadWrapper>
          <ThreadItem>帖子</ThreadItem>
          <ThreadItem>雷达</ThreadItem>
          <ThreadItem>博客</ThreadItem>
          <ThreadItem>成员分布</ThreadItem>
          <ThreadItem>工作</ThreadItem>
          <ThreadItem>酷导航</ThreadItem>
        </ThreadWrapper>
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
