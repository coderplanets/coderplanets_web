import React from 'react'
import PropTypes from 'prop-types'

import Maybe from '@components/Maybe'
import { ICON_CMD } from '@config'

import { TYPE } from '@utils'
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
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    viewerHasStarred: PropTypes.bool,
    starredCount: PropTypes.number,
  }).isRequired,
  show: PropTypes.bool,
  loading: PropTypes.bool,
}

StarReaction.defaultProps = {
  show: true,
  loading: false,
}

export default StarReaction
