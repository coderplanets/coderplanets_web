import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '../../config'
import { Maybe } from '../../components'

import {
  Reaction,
  ReactionAction,
  ReactionName,
  ReactionLoading,
  CollectIcon,
  ReactionUserNum,
  Divider,
} from './styles/reaction'

import { onReaction, onListReactionUsers } from './logic'
import { TYPE, THREAD } from '../../utils'

const FavoriteReation = ({ data, thread, show, loading }) => (
  <Maybe test={show}>
    <Reaction>
      <ReactionAction
        active={data.viewerHasFavorited}
        onClick={onReaction.bind(
          this,
          thread,
          TYPE.FAVORITE,
          data.viewerHasFavorited,
          data
        )}
      >
        <CollectIcon src={`${ICON_CMD}/uncollect.svg`} />
        <ReactionName>
          {data.viewerHasFavorited ? <span>已收藏</span> : <span>收藏</span>}
        </ReactionName>
      </ReactionAction>
      {loading ? (
        <ReactionLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <ReactionUserNum
          onClick={onListReactionUsers.bind(this, TYPE.USER_LISTER_FAVORITES, {
            thread,
            id: data.id,
            action: TYPE.FAVORITE,
            brief: data.title || '',
          })}
        >
          {data.favoritedCount}
        </ReactionUserNum>
      )}
      <Divider />
    </Reaction>
  </Maybe>
)

FavoriteReation.propTypes = {
  thread: PropTypes.oneOf(R.values(THREAD)),
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    viewerHasFavorited: PropTypes.bool,
    favoritedCount: PropTypes.number,
  }).isRequired,
  show: PropTypes.bool,
  loading: PropTypes.bool,
}

FavoriteReation.defaultProps = {
  thread: THREAD.POST,
  show: true,
  loading: false,
}

export default FavoriteReation
