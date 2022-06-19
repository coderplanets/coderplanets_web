import { FC, memo, Fragment } from 'react'
import TimeAgo from 'timeago-react'
import { includes } from 'ramda'

import type { TPost, TAccount } from '@/spec'

import TagsList from '@/widgets/TagsList'
import DotDivider from '@/widgets/DotDivider'
import ArticleCatState from '@/widgets/ArticleCatState'

import {
  Wrapper,
  AuthorInfo,
  TimeStamp,
  TagListWrapper,
} from '../../styles/upvote_fist_layout/mobile_view/header'

type TProps = {
  article: TPost
  onAuthorSelect?: (obj: TAccount) => void
}

const Header: FC<TProps> = ({ article, onAuthorSelect }) => {
  const demoList = ['239', '231', '227', '228', '226', '225']

  return (
    <Wrapper>
      <AuthorInfo>
        <div onClick={() => onAuthorSelect(article.author)}>
          {article?.author.nickname}
        </div>
        <DotDivider radius={2} space={8} />

        {!includes(article.id, demoList) ? (
          <ArticleCatState cat="QUESTION" />
        ) : (
          <Fragment>
            {article.id === '239' && <ArticleCatState cat="FEATURE" />}
            {article.id === '231' && <ArticleCatState cat="BUG" />}
            {article.id === '227' && <ArticleCatState cat="BUG" state="TODO" />}
            {article.id === '228' && (
              <ArticleCatState cat="FEATURE" state="WIP" />
            )}
            {article.id === '226' && (
              <ArticleCatState cat="QUESTION" state="RESOLVE" />
            )}
            {article.id === '225' && (
              <ArticleCatState cat="LOCK" state="LOCK" />
            )}
          </Fragment>
        )}
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

export default memo(Header)
