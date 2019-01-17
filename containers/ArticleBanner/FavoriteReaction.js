import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'
import Maybe from '../../components/Maybe'

import {
  NumberSection,
  NumberTitle,
  NumberItem,
  NumberLoading,
} from './styles/reaction_numbers'

import { numberWithCommas, TYPE } from '../../utils'
import { onReaction, onListReactionUsers } from './logic'

const FavoriteReaction = ({ data, show, loading }) => (
  <Maybe test={show}>
    <NumberSection active={data.viewerHasFavorited}>
      <NumberTitle
        onClick={onReaction.bind(
          this,
          TYPE.FAVORITE,
          data.viewerHasFavorited,
          data
        )}
      >
        {data.viewerHasFavorited ? <span>已收藏</span> : <span>收藏</span>}
      </NumberTitle>
      {loading ? (
        <NumberLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <NumberItem
          onClick={onListReactionUsers.bind(this, TYPE.USER_LISTER_STARS, {
            id: data.id,
            action: TYPE.FAVORITE,
            brief: data.title || '',
          })}
        >
          {numberWithCommas(data.favoritedCount)}
        </NumberItem>
      )}
    </NumberSection>
  </Maybe>
)

FavoriteReaction.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    viewerHasFavorited: PropTypes.bool,
    favoritedCount: PropTypes.number,
  }).isRequired,
  show: PropTypes.bool,
  loading: PropTypes.bool,
}

FavoriteReaction.defaultProps = {
  show: true,
  loading: false,
}

export default FavoriteReaction
