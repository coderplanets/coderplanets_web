import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { TYPE } from '@/constant'

import Maybe from '@/components/Maybe'
import {
  Reaction,
  ReactionAction,
  ReactionName,
  ReactionLoading,
  LikeIcon,
  ReactionUserNum,
  Divider,
} from './styles/reaction'

import { onReaction, onListReactionUsers } from './logic'

const StarReaction = ({ data, show, loading }) => (
  <Maybe test={show}>
    <Reaction>
      <ReactionAction
        active={data.viewerHasStarred}
        onClick={onReaction.bind(this, TYPE.STAR, data.viewerHasStarred, data)}
      >
        <LikeIcon src={`${ICON_CMD}/like.svg`} />
        <ReactionName>
          {data.viewerHasStarred ? <span>已赞</span> : <span>赞</span>}
        </ReactionName>
      </ReactionAction>
      {loading ? (
        <ReactionLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <ReactionUserNum
          onClick={onListReactionUsers.bind(this, TYPE.USER_LISTER_STARS, {
            id: data.id,
            action: TYPE.STAR,
            brief: data.title || '',
          })}
        >
          {data.starredCount}
        </ReactionUserNum>
      )}

      <Divider />
    </Reaction>
  </Maybe>
)

StarReaction.propTypes = {
  data: T.shape({
    id: T.string,
    title: T.string,
    viewerHasStarred: T.bool,
    starredCount: T.number,
  }).isRequired,
  show: T.bool,
  loading: T.bool,
}

StarReaction.defaultProps = {
  show: true,
  loading: false,
}

export default React.memo(StarReaction)
