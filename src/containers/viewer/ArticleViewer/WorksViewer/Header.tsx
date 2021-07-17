import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import { SIZE } from '@/constant'
import { ICON } from '@/config'

import DotDivider from '@/components/DotDivider'
import { IconButton } from '@/components/Buttons'
import { Space } from '@/components/Common'

import {
  Wrapper,
  WorksWrapper,
  Cover,
  Intro,
  Title,
  Desc,
  ContactWrapper,
  CommonInfo,
  PublishWrapper,
  PublishHint,
  PubDate,
  EditedHint,
  BaseWrapper,
  ViewIcon,
  Count,
} from '../styles/works_viewer/header'

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  const { author, insertedAt } = article
  return (
    <Wrapper>
      <WorksWrapper>
        <Cover src={author.avatar} />
        <Intro>
          <Title>CoderPlanets</Title>
          <Desc>可能是最性感的开发者社区, web first, pure</Desc>

          <ContactWrapper>
            <IconButton path="social/global.svg" size={13} />
            <IconButton path="social/github.svg" size={13} />
            <IconButton path="social/zhihu.svg" size={13} />
            <IconButton path="social/wechat-solid.svg" size={14} />
          </ContactWrapper>
        </Intro>
      </WorksWrapper>
      <CommonInfo>
        <PublishWrapper>
          <PublishHint>发布于:</PublishHint>
          <PubDate>
            <TimeAgo datetime={insertedAt} locale="zh_CN" />
          </PubDate>
          <DotDivider space={8} />
          <EditedHint>修改过</EditedHint>
        </PublishWrapper>
        <BaseWrapper>
          <ViewIcon src={`${ICON}/article/viewed.svg`} />{' '}
          <Count>{article.views}</Count>
          <Space right={14} />
          <IconButton path="article/comment.svg" mRight={6} size={15} />
          <Count>{article.commentsCount}</Count>
          {/* <DotDivider space={10} /> */}
          <IconButton path="shape/more-l.svg" mLeft={6} mRight={-4} size={15} />
          {/* <IconButton path="shape/more.svg" mRight={0} /> */}
        </BaseWrapper>
      </CommonInfo>
    </Wrapper>
  )
}

export default memo(Header)
