import { FC, memo } from 'react'
import TimeAgo from 'timeago-react'

import type { TPost, TAccount } from '@/spec'

import TagsList from '@/widgets/TagsList'
import DotDivider from '@/widgets/DotDivider'

import {
  Wrapper,
  AuthorInfo,
  TimeStamp,
  TagListWrapper,
} from '../../styles/comment_fist_layout/mobile_view/header'

type TProps = {
  article: TPost
  onAuthorSelect?: (obj: TAccount) => void
}

const Body: FC<TProps> = ({ article, onAuthorSelect }) => {
  return (
    <Wrapper>
      <AuthorInfo>
        <div onClick={() => onAuthorSelect(article.author)}>
          {article?.author.nickname}
        </div>
        <DotDivider radius={2} space={8} />
        <TimeStamp>
          <TimeAgo datetime={article.insertedAt} locale="zh_CN" />
        </TimeStamp>
      </AuthorInfo>
      <TagListWrapper>
        <TagsList items={article.articleTags} />
      </TagListWrapper>
    </Wrapper>
  )
}

export default memo(Body)
