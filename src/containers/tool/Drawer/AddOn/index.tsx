import { FC, memo } from 'react'
import { includes } from 'ramda'

import { SpaceGrow } from '@/widgets/Common'
import GotoTop from '@/widgets/GotoTop'

import ArticleNavi from './ArticleNavi'

import type { TArticleNavi } from '../spec'
import { ARTICLE_VIEWER_TYPES } from '../constant'

import CloseButton from './CloseButton'
import ShareButton from './ShareButton'
import { Wrapper, TopArea, BottomWrapper } from '../styles/add_on'

type TProps = {
  type: string
  articleNavi?: TArticleNavi
}

const AddOn: FC<TProps> = ({ type, articleNavi }) => {
  const showArticleNavi = includes(type, ARTICLE_VIEWER_TYPES)

  return (
    <Wrapper>
      <TopArea type={type}>
        <CloseButton />
        <ShareButton />
      </TopArea>

      {showArticleNavi && <ArticleNavi articleNavi={articleNavi} />}

      <SpaceGrow />
      <BottomWrapper>
        <GotoTop type="drawer" />
      </BottomWrapper>
    </Wrapper>
  )
}

export default memo(AddOn)
