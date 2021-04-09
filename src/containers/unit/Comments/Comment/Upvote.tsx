import React from 'react'

import type { TComment } from '@/spec'
import { ICON } from '@/config'
import { prettyNum } from '@/utils'

import { Wrapper, InnerWrapper, Icon } from '../styles/comment/upvote'

import { toggleLikeComment } from '../logic'

type TProps = {
  data: TComment
}

const Upvote: React.FC<TProps> = ({ data }) => (
  <Wrapper>
    <InnerWrapper>
      <div onClick={() => toggleLikeComment(data)}>
        <Icon
          src={`${ICON}/shape/upvote.svg`}
          viewerDid={data.viewerHasLiked}
        />
      </div>
      <div>{prettyNum(data.likesCount)}</div>
    </InnerWrapper>
  </Wrapper>
)

export default React.memo(Upvote)
