import React from 'react'

import { prettyNum, numberWithCommas } from '@/utils/helper'
import {
  NumbersInfo,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/reaction_numbers'

const ReactionNumbers = ({ data: { views, collectsCount, upvotesCount } }) => (
  <NumbersInfo>
    <NumberSection readOnly>
      <NumberTitle readOnly>浏览</NumberTitle>
      <NumberItem readOnly>{prettyNum(views)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    {upvotesCount >= 0 && (
      <>
        <NumberSection>
          <NumberTitle>喜欢</NumberTitle>
          <NumberItem>{numberWithCommas(upvotesCount)}</NumberItem>
        </NumberSection>
        <NumberDivider />
      </>
    )}
    {collectsCount >= 0 && (
      <NumberSection>
        <NumberTitle>收藏</NumberTitle>
        <NumberItem>{numberWithCommas(collectsCount)}</NumberItem>
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
