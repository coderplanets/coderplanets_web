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
        active={data.viewerHasUpvoted}
        onClick={() => onReaction(TYPE.STAR, data.viewerHasUpvoted, data)}
      >
        <LikeIcon src={`${ICON_CMD}/like.svg`} />
        <ReactionName>
          {data.viewerHasUpvoted ? <span>已赞</span> : <span>赞</span>}
        </ReactionName>
      </ReactionAction>
      {loading ? (
        <ReactionLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <ReactionUserNum
          onClick={() =>
            onListReactionUsers(TYPE.USER_LISTER_STARS, {
              id: data.id,
              action: TYPE.STAR,
              brief: data.title || '',
            })
          }
        >
          {data.upvotesCount}
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
    viewerHasUpvoted: T.bool,
    upvotesCount: T.number,
  }).isRequired,
  show: T.bool,
  loading: T.bool,
}

StarReaction.defaultProps = {
  show: true,
  loading: false,
}

export default React.memo(StarReaction)
