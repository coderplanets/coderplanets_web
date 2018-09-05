import React from 'react'

import { ICON_CMD } from '../../config'
import { Popover } from '../../components'
import ArticleOptions from './ArticleOptions'

import {
  MoreWrapper,
  MoreIcon,
  LinkFrom,
  RefinedLabel,
  LinkSource,
  ArticleHeader,
} from './styles/body'

// import { Wrapper } from './styles/body_header'

const BodyHeader = () => (
  <ArticleHeader>
    <MoreWrapper>
      <Popover
        content={<ArticleOptions />}
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
    <RefinedLabel>精华帖</RefinedLabel>
  </ArticleHeader>
)

export default BodyHeader
