import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'

import ArticleMenu from '@/components/ArticleMenu'
import ArticleBaseStats from '@/components/ArticleBaseStats'
import DotDivider from '@/components/DotDivider'
import IconButton from '@/components/Buttons/IconButton'
import { Space } from '@/components/Common'
import Linker from '@/components/Linker'

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
          <Title>{article.title}</Title>
          <Desc>可能是最性感的开发者社区, web first, pure</Desc>

          <ContactWrapper>
            <Linker src="https://coderplanets.com" right={10} />
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
          <ArticleBaseStats article={article} container="drawer" />
          <Space right={5} />
          <ArticleMenu verticalIcon />
        </BaseWrapper>
      </CommonInfo>
    </Wrapper>
  )
}

export default memo(Header)
