import React from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { TYPE } from '@constant'
import { numberWithCommas } from '@utils'

import Maybe from '@components/Maybe'
import {
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
  NumberLoading,
} from './styles/reaction_numbers'

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

export default StarReaction
