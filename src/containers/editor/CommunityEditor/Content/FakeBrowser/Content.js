import React from 'react'
import T from 'prop-types'

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

const Content = ({ title, desc }) => {
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
          <ThreadItem>周报</ThreadItem>
          <ThreadItem>导航</ThreadItem>
          <ThreadItem>小技巧</ThreadItem>
          <ThreadItem>wiki</ThreadItem>
          <ThreadItem>地图</ThreadItem>
          <ThreadItem>酷团队</ThreadItem>
          <ThreadItem>工作</ThreadItem>
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

Content.propTypes = {
  title: T.string,
  desc: T.string,
}

Content.defaultProps = {
  title: '',
  desc: '',
}

export default React.memo(Content)
