import { FC, memo } from 'react'
import { includes } from 'ramda'

import ArticleNavi from './ArticleNavi'

import type { TArticleNavi } from '../spec'
import { ARTICLE_VIEWER_TYPES } from '../constant'

import CloseButton from './CloseButton'
import ShareButton from './ShareButton'
import { Wrapper, TopArea } from '../styles/add_on'

type TProps = {
  type: string
  articleNavi?: TArticleNavi
}

const AddOn: FC<TProps> = ({ type, articleNavi }) => {
  const showArticleNavi = includes(type, ARTICLE_VIEWER_TYPES)
  const showShare = includes(type, ARTICLE_VIEWER_TYPES)

  return (
    <Wrapper>
      <TopArea showShare={showShare}>
        <CloseButton />
        {showShare && <ShareButton />}
      </TopArea>

      {showArticleNavi && <ArticleNavi articleNavi={articleNavi} />}
    </Wrapper>
  )
}

export default memo(AddOn)
