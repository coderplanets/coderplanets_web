import { FC, memo, Fragment } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost } from '@/spec'

import DotDivider from '@/widgets/DotDivider'
import ArticleStateBadge from '@/widgets/ArticleStateBadge'

import {
  Wrapper,
  AuthorWrapper,
  // Avatar,
  AuthorName,
  PublishWrapper,
  PubDate,
  EditedHint,
} from '../styles/post_viewer/header'

type TProps = {
  article: TPost
}

const Header: FC<TProps> = ({ article }) => {
  const { author, meta, insertedAt } = article
  return (
    <Wrapper>
      <AuthorWrapper>
        {/* <Avatar src={author.avatar} /> */}
        <AuthorName>{author.nickname}</AuthorName>
      </AuthorWrapper>
      <DotDivider space={10} />
      <PublishWrapper>
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
      <DotDivider space={10} />
      {article.id === '239' && <ArticleStateBadge type="FEATURE" />}
      {article.id === '231' && <ArticleStateBadge type="BUG" />}
      {article.id === '227' && <ArticleStateBadge type="BUG" state="TODO" />}
      {article.id === '228' && <ArticleStateBadge type="FEATURE" state="WIP" />}
      {article.id === '226' && (
        <ArticleStateBadge type="QUESTION" state="RESOLVE" articleInfoLayout />
      )}
      {article.id === '225' && (
        <ArticleStateBadge type="LOCK" state="LOCK" articleInfoLayout />
      )}
    </Wrapper>
  )
}

export default memo(Header)
