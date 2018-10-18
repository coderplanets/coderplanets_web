import React from 'react'

import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/reaction_numbers'

import { prettyNum } from '../../utils'

const ReactionNumbers = ({ data: { views, favoritedCount, starredCount } }) => (
  <NumbersInfo>
    <NumberSection dead>
      <NumberTitle dead>阅读</NumberTitle>
      <NumberItem dead>{prettyNum(views)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>喜欢</NumberTitle>
      <NumberItem>{prettyNum(starredCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>收藏</NumberTitle>
      <NumberItem>{prettyNum(favoritedCount)}</NumberItem>
    </NumberSection>
    {/*
        <NumberDivider />
        <NumberSection>
        <NumberTitle>关注</NumberTitle>
        <NumberItem>TD</NumberItem>
        </NumberSection>
      */}
  </NumbersInfo>
)

export default ReactionNumbers
