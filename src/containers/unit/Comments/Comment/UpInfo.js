import React from 'react'

import { ICON } from '@/config'
import { prettyNum } from '@/utils'

import { Wrapper, Icon } from '../styles/comment/up_info'

import { toggleLikeComment } from '../logic'

const UpInfo = ({ data }) => (
  <Wrapper>
    <div onClick={() => toggleLikeComment(data)}>
      <Icon src={`${ICON}/shape/vote-up.svg`} viewerDid={data.viewerHasLiked} />
    </div>
    <div>{prettyNum(data.likesCount)}</div>
  </Wrapper>
)

export default React.memo(UpInfo)
