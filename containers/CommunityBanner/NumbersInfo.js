/*
 *
 * NumbersInfo
 *
 */
import React from 'react'

import { prettyNum } from '../../utils'

import {
  NumbersWrapper,
  NumberSection,
  NumberDivider,
  NumberTitle,
  NumberItem,
} from './styles/numbers_info'

const NumbersInfo = ({
  content: { subscribersCount, editorsCount, postsCount },
}) => (
  <NumbersWrapper>
    <NumberSection>
      <NumberTitle>关注</NumberTitle>
      <NumberItem>{prettyNum(subscribersCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>内容</NumberTitle>
      <NumberItem>{prettyNum(postsCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>编辑</NumberTitle>
      <NumberItem>{prettyNum(editorsCount)}</NumberItem>
    </NumberSection>
  </NumbersWrapper>
)

export default NumbersInfo
