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
} from './styles/body_header'

// import { Wrapper } from './styles/body_header'

// content={<ArticleOptions thread={thread} />}
const BodyHeader = ({ actionsPanel }) => (
  <Wrapper>
    <MoreWrapper>
      <Popover content={actionsPanel} placement="bottomLeft" trigger="click">
        <div>
          <MoreIcon src={`${ICON_CMD}/article_more.svg`} />
        </div>
      </Popover>
    </MoreWrapper>
    <LablerWrapper>
      <Labeler />
    </LablerWrapper>
    <div />
  </Wrapper>
)

export default BodyHeader
