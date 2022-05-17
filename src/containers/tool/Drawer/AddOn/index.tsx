import { FC, memo } from 'react'
import { includes } from 'ramda'

import ArticleNavi from './ArticleNavi'

import type { TArticleNavi } from '../spec'
import { ARTICLE_VIEWER_TYPES } from '../constant'

import IconButton from '@/widgets/Buttons/IconButton'

import Share from '@/containers/tool/Share'
import CloseButton from './CloseButton'
import { Wrapper, ViewerWrapper, TopArea } from '../styles/add_on'
import { isViewerMode } from '../styles/metrics'
import { closeDrawer } from '../logic'

type TProps = {
  type: string
  articleNavi?: TArticleNavi
}

const AddOn: FC<TProps> = ({ type, articleNavi }) => {
  const showArticleNavi = includes(type, ARTICLE_VIEWER_TYPES)
  const showShare = includes(type, ARTICLE_VIEWER_TYPES)

  if (!isViewerMode(type)) {
    return (
      <Wrapper>
        <IconButton icon="close" onClick={closeDrawer} size={20} />
      </Wrapper>
    )
  }

  return (
    <ViewerWrapper>
      <TopArea showShare={showShare}>
        <CloseButton />
        {showShare && <Share top={9} left={6} size={15} offsetLeft="50%" />}
      </TopArea>

      {showArticleNavi && <ArticleNavi articleNavi={articleNavi} />}
    </ViewerWrapper>
  )
}

export default memo(AddOn)
