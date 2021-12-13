/* eslint-disable react/jsx-no-comment-textnodes */
import { FC, memo, Fragment } from 'react'
import Link from 'next/link'
import TimeAgo from 'timeago-react'

import type { TComment } from '@/spec'

import { Space } from '@/widgets/Common'
import DotDivider from '@/widgets/DotDivider'

import {
  FloorNum,
  CreateDate,
  HeaderBaseInfo,
  BaseInfo,
  AuthorTitle,
  AuthorName,
  ArticleBase,
} from '../../styles/comment/header/user_published'

type TProps = {
  data: TComment
}

const CommentHeader: FC<TProps> = ({ data }) => {
  const { article } = data

  return (
    <Fragment>
      <HeaderBaseInfo>
        <BaseInfo>
          <ArticleBase>
            <Link href={`/${article.thread}/${article.id}`} passHref>
              <AuthorTitle>{article.title}</AuthorTitle>
            </Link>
          </ArticleBase>
          <FloorNum>
            #<Space right={2} />
            {data.floor}
          </FloorNum>
          <Space right={10} />
        </BaseInfo>
        <Link href={`/u/${article.author.login}`} passHref>
          <AuthorName>{article.author.nickname}</AuthorName>
        </Link>

        <CreateDate>
          // 评论于: <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
        </CreateDate>
      </HeaderBaseInfo>
    </Fragment>
  )
}

export default memo(CommentHeader)
