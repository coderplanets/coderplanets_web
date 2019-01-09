import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '../../config'
import { Maybe } from '../../components'

import {
  Reaction,
  ReactionAction,
  ReactionName,
  LikeIcon,
  ReactionUserNum,
  Divider,
} from './styles/reaction'

import { onReaction, onListReactionUsers } from './logic'
import { TYPE, THREAD } from '../../utils'

const StarReaction = ({ data, show, thread }) => (
  <Maybe test={show}>
    <Reaction>
      <ReactionAction
        active={data.viewerHasStarred}
        onClick={onReaction.bind(
          this,
          thread,
          TYPE.STAR,
          data.viewerHasStarred,
          data
        )}
      >
        <LikeIcon src={`${ICON_CMD}/like.svg`} />
        <ReactionName>
          {data.viewerHasStarred ? <span>已赞</span> : <span>赞</span>}
        </ReactionName>
      </ReactionAction>
      <ReactionUserNum
        onClick={onListReactionUsers.bind(this, TYPE.USER_LISTER_STARS, {
          thread,
          id: data.id,
          action: TYPE.STAR,
          brief: data.title || '',
        })}
      >
        {data.starredCount}
      </ReactionUserNum>
      <Divider />
    </Reaction>
  </Maybe>
)

StarReaction.propTypes = {
  thread: PropTypes.oneOf(R.values(THREAD)),
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    viewerHasStarred: PropTypes.bool,
    starredCount: PropTypes.number,
  }).isRequired,
  show: PropTypes.bool,
}

StarReaction.defaultProps = {
  thread: THREAD.POST,
  show: true,
}

export default StarReaction
