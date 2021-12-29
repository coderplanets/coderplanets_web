import { FC, Fragment, memo, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import type { TCommunity, TPost } from '@/spec'
import { UPVOTE_LAYOUT } from '@/constant'

import { upvoteOnArticleList } from '@/utils/helper'
import TheAvatar from '@/widgets/TheAvatar'

import Header from './Header'
import Body from './Body'

import { AvatarWrapper, UpvoteWrapper, Main } from '../styles/desktop_view'

let Upvote = null
let ArticleReadLabel = null
let ArticlePinLabel = null

type TProps = {
  curCommunity: TCommunity | null
  entry: TPost

  // onUserSelect?: (obj: TUser) => void
  // onAuthorSelect?: (obj: TAccount) => void
}

const DigestView: FC<TProps> = ({ curCommunity, entry }) => {
  const [loaded, setLoaded] = useState(false)

  // 如果同步渲染 Upvote, ArticleReadLabel, ArticlePinLabel 等组件会导致难以忍受的卡顿
  // 尤其是在 Tab 切换的时候。手机端因为目前没有这些组件，性能暂无问题。
  // 本不应该存在的无聊问题，蛋疼的解决办法，
  useEffect(() => {
    const cfg = { ssr: false }

    Upvote = dynamic(() => import('@/widgets/Upvote'), cfg)
    ArticleReadLabel = dynamic(() => import('@/widgets/ArticleReadLabel'), cfg)
    ArticlePinLabel = dynamic(() => import('@/widgets/ArticlePinLabel'), cfg)

    setTimeout(() => {
      setLoaded(true)
    }, 200)
  }, [])

  return (
    <Fragment>
      {loaded && (
        <Fragment>
          <ArticleReadLabel entry={entry} />
          <ArticlePinLabel entry={entry} />
        </Fragment>
      )}
      <AvatarWrapper>
        <TheAvatar user={entry.author} />
        <UpvoteWrapper>
          {loaded && (
            <Upvote
              type={UPVOTE_LAYOUT.POST_LIST}
              count={entry.upvotesCount}
              viewerHasUpvoted={entry.viewerHasUpvoted}
              onAction={(viewerHasUpvoted) =>
                upvoteOnArticleList(entry, viewerHasUpvoted)
              }
            />
          )}
        </UpvoteWrapper>
      </AvatarWrapper>
      <Main>
        <Header item={entry} />
        <Body item={entry} curCommunity={curCommunity} />
      </Main>
    </Fragment>
  )
}

export default memo(DigestView)
