import { FC, memo } from 'react'

import type { TArticle } from '@/spec'

import { IconButton } from '@/components/Buttons'
import Upvote from '@/components/Upvote'

import { Wrapper } from './styles/article_sticker'

type TProps = {
  show: boolean
  viewing: TArticle
}

const ArticleSticker: FC<TProps> = ({ show, viewing }) => {
  return (
    <Wrapper show={show}>
      <Upvote count={viewing.starredCount} type="sticker" />
      <IconButton
        path="article/collect-bookmark.svg"
        size={24}
        mTop={20}
        mLeft={2}
        mRight={0}
      />
      <IconButton
        path="article/share-solid.svg"
        size={20}
        mLeft={4}
        mTop={15}
        mRight={0}
      />
    </Wrapper>
  )
}

export default memo(ArticleSticker)
