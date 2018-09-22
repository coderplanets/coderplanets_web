import React from 'react'

import { ICON_CMD } from '../../config'
import { Popover } from '../../components'
import ArticleOptions from './ArticleOptions'

import {
  Wrapper,
  MoreWrapper,
  MoreIcon,
  LinkFrom,
  RefinedLabel,
  LinkSource,
  RefinedIcon,
  RefinedText,
} from './styles/body_header'

// import { Wrapper } from './styles/body_header'

const BodyHeader = ({ thread }) => (
  <Wrapper>
    <MoreWrapper>
      <Popover
        content={<ArticleOptions thread={thread} />}
        placement="bottomLeft"
        trigger="click"
      >
        <div>
          <MoreIcon src={`${ICON_CMD}/more.svg`} />
        </div>
      </Popover>
    </MoreWrapper>
    <LinkFrom>
      <div>转载自:&nbsp;</div>
      <LinkSource>github.com/mydearxym/...</LinkSource>
    </LinkFrom>
    <RefinedLabel>
      <RefinedIcon src={`${ICON_CMD}/diamond_frame.svg`} />
      <RefinedText>精 华</RefinedText>
    </RefinedLabel>
  </Wrapper>
)

export default BodyHeader
