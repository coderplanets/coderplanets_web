import { FC, Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import type { TCommunity, TPost } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'

import { upvoteOnArticleList } from '@/utils/helper'
import TheAvatar from '@/widgets/TheAvatar'
import ViewingSign from '../../ViewingSign'

import Header from './Header'
import Body from './Body'

import {
  Wrapper,
  AvatarWrapper,
  UpvoteWrapper,
  Main,
} from '../../styles/comment_fist_layout/desktop_view'

let Upvote = null
let ArticleReadLabel = null
let ArticlePinLabel = null

type TProps = {
  curCommunity: TCommunity | null
  article: TPost

  // onUserSelect?: (obj: TUser) => void
  // onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ curCommunity, article }) => {
  const [loaded, setLoaded] = useState(false)

  // 如果同步渲染 Upvote, ArticleReadLabel, ArticlePinLabel 等组件会导致难以忍受的卡顿
  // 尤其是在 Tab 切换的时候。手机端因为目前没有这些组件，性能暂无问题。
  // 本不应该存在的无聊问题，蛋疼的解决办法，
  useEffect(() => {
    Upvote = dynamic(() => import('@/widgets/Upvote'), { ssr: false })
    ArticleReadLabel = dynamic(() => import('@/widgets/ArticleReadLabel'), {
      ssr: false,
    })
    ArticlePinLabel = dynamic(() => import('@/widgets/ArticlePinLabel'), {
      ssr: false,
    })

    setTimeout(() => {
      setLoaded(true)
    }, 200)
  }, [])

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <ArticleReadLabel article={article} />
          <ArticlePinLabel article={article} />
        </Fragment>
      )}
      <ViewingSign article={article} top={18} />
      <AvatarWrapper>
        <TheAvatar user={article.author} />
        <UpvoteWrapper>
          {loaded && (
            <Upvote
              type={UPVOTE_LAYOUT.POST_LIST}
              count={article.upvotesCount}
              viewerHasUpvoted={article.viewerHasUpvoted}
              onAction={(viewerHasUpvoted) =>
                upvoteOnArticleList(article, viewerHasUpvoted)
              }
            />
          )}
        </UpvoteWrapper>
      </AvatarWrapper>
      <Main>
        <Header article={article} />
        <Body article={article} curCommunity={curCommunity} />
      </Main>
    </Wrapper>
  )
}

export default memo(DigestView)
