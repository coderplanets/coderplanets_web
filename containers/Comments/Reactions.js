import React from 'react'

import { ICON_CMD } from '@config'
import { prettyNum } from '@utils'
// import { ICON_CMD } from '../../config'
// import { Wrapper } from './styles'
import { SpaceGrow } from '@components/BaseStyled'
import Actions from './Actions'

import {
  Wrapper,
  VisiableAction,
  ActionNumber,
  UpIcon,
  DownIcon,
} from './styles/reactions'

import { toggleLikeComment, toggleDislikeComment } from './logic'

const Reactions = ({ data, accountInfo }) => (
  <Wrapper>
    <VisiableAction>
      <div onClick={toggleLikeComment.bind(this, data)}>
        <UpIcon src={`${ICON_CMD}/up.svg`} viewerDid={data.viewerHasLiked} />
      </div>
      <ActionNumber>{prettyNum(data.likesCount)}</ActionNumber>
    </VisiableAction>
    <VisiableAction>
      <div onClick={toggleDislikeComment.bind(this, data)}>
        <DownIcon
          src={`${ICON_CMD}/arrow-up-o.svg`}
          viewerDid={data.viewerHasDisliked}
        />
      </div>
      <ActionNumber>{prettyNum(data.dislikesCount)}</ActionNumber>
    </VisiableAction>
    <SpaceGrow />
    <Actions data={data} accountInfo={accountInfo} />
  </Wrapper>
)

export default Reactions
