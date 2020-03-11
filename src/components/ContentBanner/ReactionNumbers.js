import React from 'react'

import { prettyNum, numberWithCommas } from '@utils'
import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/reaction_numbers'

const ReactionNumbers = ({ data: { views, favoritedCount, starredCount } }) => (
  <NumbersInfo>
    <NumberSection readOnly>
      <NumberTitle readOnly>浏览</NumberTitle>
      <NumberItem readOnly>{prettyNum(views)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    {starredCount >= 0 && (
      <React.Fragment>
        <NumberSection>
          <NumberTitle>喜欢</NumberTitle>
          <NumberItem>{numberWithCommas(starredCount)}</NumberItem>
        </NumberSection>
        <NumberDivider />
      </React.Fragment>
    )}
    {favoritedCount >= 0 && (
      <NumberSection>
        <NumberTitle>收藏</NumberTitle>
        <NumberItem>{numberWithCommas(favoritedCount)}</NumberItem>
      </NumberSection>
    )}
    {/*
        <NumberDivider />
        <NumberSection>
        <NumberTitle>关注</NumberTitle>
        <NumberItem>TD</NumberItem>
        </NumberSection>
      */}
  </NumbersInfo>
)

export default React.memo(ReactionNumbers)
