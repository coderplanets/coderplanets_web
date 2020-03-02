import React from 'react'

import { prettyNum } from '@utils'
import StarReaction from './StarReaction'
import FavoriteReaction from './FavoriteReaction'

import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/reaction_numbers'

const ReactionNumbers = ({ data, starLoading, favoriteLoading, showStar }) => {
  const { views } = data

  return (
    <NumbersInfo>
      <NumberSection readOnly>
        <NumberTitle readOnly>浏览</NumberTitle>
        <NumberItem readOnly>{prettyNum(views)}</NumberItem>
      </NumberSection>
      <NumberDivider />
      {showStar && <StarReaction data={data} loading={starLoading} />}
      <FavoriteReaction data={data} loading={favoriteLoading} />
      {/*
          <NumberDivider />
          <NumberSection>
          <NumberTitle>关注</NumberTitle>
          <NumberItem>TD</NumberItem>
          </NumberSection>
        */}
    </NumbersInfo>
  )
}

export default React.memo(ReactionNumbers)
