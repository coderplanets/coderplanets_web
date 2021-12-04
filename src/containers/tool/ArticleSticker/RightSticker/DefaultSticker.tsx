import { FC, memo } from 'react'

import type { TArticle } from '@/spec'
import { SVG } from '@/constant'

import { shareTo, addCollection } from '@/utils/helper'
import IconButton from '@/widgets/Buttons/IconButton'
import Upvote from '@/widgets/Upvote'

import { Wrapper } from '../styles/right_sticker/default_sticker'
import { handleUpvote } from '../logic'

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
        icon={SVG.COLLECTION}
        onClick={() => addCollection()}
        size={23}
        mLeft={2}
        mTop={18}
        mRight={0}
      />
      <IconButton
        icon={SVG.SHARE}
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
