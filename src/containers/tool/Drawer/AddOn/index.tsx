import { FC, memo } from 'react'
import { includes } from 'ramda'

import ArticleNavi from './ArticleNavi'

import type { TArticleNavi } from '../spec'
import { ARTICLE_VIEWER_TYPES } from '../constant'

import Share from '@/containers/tool/Share'
import CloseButton from './CloseButton'
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
        {showShare && <Share top={9} left={6} size={15} offsetLeft="50%" />}
      </TopArea>

      {showArticleNavi && <ArticleNavi articleNavi={articleNavi} />}
    </Wrapper>
  )
}

export default memo(AddOn)
