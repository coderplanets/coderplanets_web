import React from 'react'

import { ICON_CMD } from '../../config'

import Labeler from '../Labeler'
import { Popover, ArticleActionsPanel } from '../../components'

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

import * as logic from './logic'

const BodyHeader = ({ thread, data }) => (
  <Wrapper>
    <MoreWrapper>
      <Popover
        content={
          <ArticleActionsPanel
            thread={thread}
            entry={data}
            onPin={logic.onPin}
            onUndoPin={logic.onUndoPin}
          />
        }
        placement="bottomLeft"
        trigger="click"
      >
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
