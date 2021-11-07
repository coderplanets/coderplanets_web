import { FC, memo, Fragment } from 'react'
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
  return (
    <Fragment>
      <HeaderBaseInfo>
        <BaseInfo>
          <ArticleBase>
            <AuthorTitle>{data.article.title}</AuthorTitle>
            <DotDivider space={8} />
            <AuthorName>{data.author.nickname}</AuthorName>
          </ArticleBase>
          <FloorNum>
            #<Space right={2} />
            {data.floor}
          </FloorNum>
          <Space right={10} />
        </BaseInfo>

        <CreateDate>
          评论于: <TimeAgo datetime={data.insertedAt} locale="zh_CN" />
        </CreateDate>
      </HeaderBaseInfo>
    </Fragment>
  )
}

export default memo(CommentHeader)
