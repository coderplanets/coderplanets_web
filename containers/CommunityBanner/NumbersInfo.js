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

import * as logic from './logic'

const NumbersInfo = ({
  content: { subscribersCount, editorsCount, postsCount },
}) => (
  <NumbersWrapper>
    <NumberSection>
      <NumberTitle>关注</NumberTitle>
      <NumberItem>{prettyNum(subscribersCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection dead>
      <NumberTitle dead>内容</NumberTitle>
      <NumberItem dead>{prettyNum(postsCount)}</NumberItem>
    </NumberSection>
    <NumberDivider />
    <NumberSection>
      <NumberTitle>编辑</NumberTitle>
      <NumberItem onClick={logic.showEditorList}>
        {prettyNum(editorsCount)}
      </NumberItem>
    </NumberSection>
  </NumbersWrapper>
)

export default NumbersInfo
