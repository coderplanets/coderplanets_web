import React from 'react'

import { ICON_CMD } from '@/config'
import { prettyNum } from '@/utils'

import { Wrapper, Icon } from './styles/up_info'

import { toggleLikeComment } from '../logic'

const UpInfo = ({ data }) => (
  <Wrapper>
    <div onClick={() => toggleLikeComment(data)}>
      <Icon
        src={`${ICON_CMD}/arrow-up-o.svg`}
        viewerDid={data.viewerHasLiked}
      />
    </div>
    <div>{prettyNum(data.likesCount)}</div>
  </Wrapper>
)

export default React.memo(UpInfo)
