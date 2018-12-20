import React from 'react'

import { ICON_CMD } from '../../config'

import { Labeler } from '../../containers'
import Popover from '../Popover'

// import ArticleOptions from '../../containers/ArticleViwer/ArticleOptions'

import {
  Wrapper,
  MoreWrapper,
  MoreIcon,
  LablerWrapper,
  RefinedLabel,
  RefinedIcon,
  RefinedText,
} from './styles/body_header'

// import { Wrapper } from './styles/body_header'

// content={<ArticleOptions thread={thread} />}
const BodyHeader = () => (
  <Wrapper>
    <MoreWrapper>
      <Popover content={<div>...</div>} placement="bottomLeft" trigger="click">
        <div>
          <MoreIcon src={`${ICON_CMD}/article_more.svg`} />
        </div>
      </Popover>
    </MoreWrapper>
    <LablerWrapper>
      <Labeler />
    </LablerWrapper>
    <RefinedLabel>
      <RefinedIcon src={`${ICON_CMD}/diamond_frame.svg`} />
      <RefinedText>精 华</RefinedText>
    </RefinedLabel>
  </Wrapper>
)

export default BodyHeader
