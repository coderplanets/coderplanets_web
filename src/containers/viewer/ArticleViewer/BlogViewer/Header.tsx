import { FC, memo, Fragment } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'
import DotDivider from '@/widgets/DotDivider'
import { Space } from '@/widgets/Common'

import {
  Wrapper,
  AuthorWrapper,
  AuthorName,
  AuthorDesc,
  PublishWrapper,
  PublishHint,
  PubDate,
  EditedHint,
} from '../styles/blog_viewer/header'

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  const { author, meta, insertedAt } = article
  return (
    <Wrapper>
      <AuthorWrapper>
        <AuthorDesc>原文由</AuthorDesc>
        <AuthorName>{author.nickname}</AuthorName>
        <Space right={8} />
        <AuthorDesc>发布于</AuthorDesc>
        <PubDate>
          <TimeAgo datetime={insertedAt} locale="zh_CN" />
        </PubDate>
      </AuthorWrapper>
      <PublishWrapper>
        <PublishHint>收录于:</PublishHint>
        <PubDate>
          <TimeAgo datetime={insertedAt} locale="zh_CN" />
        </PubDate>
        {meta.isEdited && (
          <Fragment>
            <DotDivider space={8} />
            <EditedHint>修改过</EditedHint>
          </Fragment>
        )}
      </PublishWrapper>
    </Wrapper>
  )
}

export default memo(Header)
