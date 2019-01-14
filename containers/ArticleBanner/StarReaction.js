import React from 'react'
import PropTypes from 'prop-types'

import { ICON_CMD } from '../../config'
import Maybe from '../../components/Maybe'

import {
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
  NumberLoading,
} from './styles/reaction_numbers'

import { numberWithCommas, TYPE } from '../../utils'
import { onReaction, onListReactionUsers } from './logic'

const StarReaction = ({ data, show, loading }) => (
  <Maybe test={show}>
    <NumberSection active={data.viewerHasStarred}>
      <NumberTitle
        onClick={onReaction.bind(this, TYPE.STAR, data.viewerHasStarred, data)}
      >
        {data.viewerHasStarred ? <span>已赞</span> : <span>赞</span>}
      </NumberTitle>
      {loading ? (
        <NumberLoading src={`${ICON_CMD}/reaction_loading.svg`} />
      ) : (
        <NumberItem
          onClick={onListReactionUsers.bind(this, TYPE.USER_LISTER_STARS, {
            id: data.id,
            action: TYPE.STAR,
            brief: data.title || '',
          })}
        >
          {numberWithCommas(data.starredCount)}
        </NumberItem>
      )}
    </NumberSection>
    <NumberDivider />
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
