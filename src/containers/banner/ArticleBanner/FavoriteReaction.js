import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { TYPE } from '@/constant'
import { numberWithCommas } from '@/utils'

import Maybe from '@/components/Maybe'
import {
  NumberSection,
  NumberTitle,
  NumberItem,
  NumberLoading,
} from './styles/reaction_numbers'

import { onReaction, onListReactionUsers } from './logic'

const FavoriteReaction = ({ data, show, loading }) => (
  <Maybe test={show}>
    <NumberSection active={data.viewerHasFavorited}>
      <NumberTitle
        onClick={() => onReaction(TYPE.FAVORITE, data.viewerHasFavorited, data)}
      >
        {data.viewerHasFavorited ? <span>已收藏</span> : <span>收藏</span>}
      </NumberTitle>
      {loading ? (
        <NumberLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <NumberItem
          onClick={() =>
            onListReactionUsers(TYPE.USER_LISTER_STARS, {
              id: data.id,
              action: TYPE.FAVORITE,
              brief: data.title || '',
            })
          }
        >
          {numberWithCommas(data.favoritedCount)}
        </NumberItem>
      )}
    </NumberSection>
  </Maybe>
)

FavoriteReaction.propTypes = {
  data: T.shape({
    id: T.string,
    title: T.string,
    viewerHasFavorited: T.bool,
    favoritedCount: T.number,
  }).isRequired,
  show: T.bool,
  loading: T.bool,
}

FavoriteReaction.defaultProps = {
  show: true,
  loading: false,
}

export default React.memo(FavoriteReaction)
