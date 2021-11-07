import { FC, memo } from 'react'

import type { TComment } from '@/spec'

import ArticleHeader from './Article'
import UserPublishedHeader from './UserPublished'

import type { TAPIMode } from '../../spec'
import { API_MODE } from '../../constant'

import { Wrapper } from '../../styles/comment/header/article'

type TProps = {
  data: TComment
  apiMode: TAPIMode
  showInnerRef: boolean
}

const CommentHeader: FC<TProps> = ({ data, showInnerRef, apiMode }) => {
  console.log('header apiMode: ', apiMode)

  return (
    <Wrapper>
      {apiMode === API_MODE.ARTICLE ? (
        <ArticleHeader data={data} showInnerRef={showInnerRef} />
      ) : (
        <UserPublishedHeader data={data} />
      )}
    </Wrapper>
  )
}

export default memo(CommentHeader)
