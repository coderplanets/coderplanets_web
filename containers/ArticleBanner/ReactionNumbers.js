import React from 'react'

import StarReaction from './StarReaction'
import FavoriteReaction from './FavoriteReaction'

import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/reaction_numbers'

import { prettyNum } from '../../utils'

const ReactionNumbers = ({ data, starLoading, favoriteLoading }) => {
  const { views } = data

  return (
    <NumbersInfo>
      <NumberSection readonly>
        <NumberTitle readonly>浏览</NumberTitle>
        <NumberItem readonly>{prettyNum(views)}</NumberItem>
      </NumberSection>
      <NumberDivider />
      <StarReaction data={data} loading={starLoading} />
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

export default ReactionNumbers
