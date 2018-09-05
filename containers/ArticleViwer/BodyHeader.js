import React from 'react'

import { ICON_ASSETS } from '../../config'
import { Popover } from '../../components'

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
        content={
          <div>
            <h4>编辑文章</h4>
            <h4>删除文章</h4>
            <h4>置为精华</h4>
            <h4>取消精华帖</h4>
            <h4>举报文章</h4>
          </div>
        }
        placement="right"
        trigger="hover"
      >
        <div>
          <MoreIcon src={`${ICON_ASSETS}/cmd/more.svg`} />
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
