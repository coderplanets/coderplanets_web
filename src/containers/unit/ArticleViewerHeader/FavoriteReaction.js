import React from 'react'
import T from 'prop-types'
import { values } from 'ramda'

import { ICON_CMD } from '@/config'
import { TYPE, THREAD } from '@/constant'

import Maybe from '@/components/Maybe'
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

const FavoriteReaction = ({ data, thread, show, loading }) => (
  <Maybe test={show}>
    <Reaction>
      <ReactionAction
        active={data.viewerHasCollected}
        onClick={() => onReaction(TYPE.FAVORITE, data.viewerHasCollected, data)}
      >
        <CollectIcon src={`${ICON_CMD}/uncollect.svg`} />
        <ReactionName>
          {data.viewerHasCollected ? <span>已收藏</span> : <span>收藏</span>}
        </ReactionName>
      </ReactionAction>
      {loading ? (
        <ReactionLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <ReactionUserNum
          onClick={() =>
            onListReactionUsers(TYPE.USER_LISTER_FAVORITES, {
              thread,
              id: data.id,
              action: TYPE.FAVORITE,
              brief: data.title || '',
            })
          }
        >
          {data.collectsCount}
        </ReactionUserNum>
      )}
      <Divider />
    </Reaction>
  </Maybe>
)

FavoriteReaction.propTypes = {
  thread: T.oneOf(values(THREAD)),
  data: T.shape({
    id: T.string,
    title: T.string,
    viewerHasCollected: T.bool,
    collectsCount: T.number,
  }).isRequired,
  show: T.bool,
  loading: T.bool,
}

FavoriteReaction.defaultProps = {
  thread: THREAD.POST,
  show: true,
  loading: false,
}

export default React.memo(FavoriteReaction)
