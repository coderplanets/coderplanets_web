import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { shareTo } from '@/utils/helper'

import IconButton from '@/components/Buttons/IconButton'
import Upvote from '@/components/Upvote'

import { Wrapper } from '../styles/right_sticker/default_sticker'
import { collectArticle, handleUpvote } from '../logic'

type TProps = {
  show: boolean
  article: TArticle
}

const ArticleSticker: FC<TProps> = ({ show, article }) => {
  return (
    <Wrapper show={show}>
      <Upvote
        count={article.upvotesCount}
        type="article"
        viewerHasUpvoted={article.viewerHasUpvoted}
        onAction={handleUpvote}
      />
      <IconButton
        path="article/collect-bookmark.svg"
        onClick={collectArticle}
        size={23}
        mLeft={2}
        mTop={18}
        mRight={0}
      />
      <IconButton
        path="article/share-solid.svg"
        onClick={shareTo}
        size={20}
        mLeft={4}
        mTop={12}
        mRight={0}
      />
    </Wrapper>
  )
}

export default memo(ArticleSticker)
