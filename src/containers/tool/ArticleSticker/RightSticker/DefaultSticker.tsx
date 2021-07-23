import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { shareTo } from '@/utils'

import { IconButton } from '@/components/Buttons'
import Upvote from '@/components/Upvote'

import { Wrapper } from '../styles/right_sticker/default_sticker'

type TProps = {
  show: boolean
  article: TArticle
}

const ArticleSticker: FC<TProps> = ({ show, article }) => {
  return (
    <Wrapper show={show}>
      <Upvote count={article.starredCount} type="article" />
      <IconButton
        path="article/collect-bookmark.svg"
        size={24}
        mTop={20}
        mLeft={2}
        mRight={0}
      />
      <IconButton
        path="article/share-solid.svg"
        onClick={() => shareTo()}
        size={20}
        mLeft={5}
        mTop={15}
        mRight={0}
      />
    </Wrapper>
  )
}

export default memo(ArticleSticker)
