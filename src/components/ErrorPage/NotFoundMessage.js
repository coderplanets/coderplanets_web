import React from 'react'
import { isEmpty } from 'ramda'

import { METRIC } from '@/constant'
import { ISSUE_ADDR } from '@/config'
import { HintTitle, IssueLink } from './styles'

const NotFoundMessage = ({ page, path }) => {
  switch (page) {
    case METRIC.USER:
      return (
        <HintTitle>
          未找到该用户
          {!isEmpty(path) && <span>: {path}</span>}
        </HintTitle>
      )

    case METRIC.ARTICLE:
      return <HintTitle>未找到该帖子</HintTitle>

    case METRIC.COMMUNITY:
      return (
        <HintTitle>
          未找到社区
          {!isEmpty(path) && <span>: {path}</span>}, 欢迎
          <IssueLink
            href={`${ISSUE_ADDR}/280`}
            rel="noopener noreferrer"
            target="_blank"
          >
            参与创建
          </IssueLink>
        </HintTitle>
      )

    default:
      return <HintTitle>未找到该页面</HintTitle>
  }
}

export default React.memo(NotFoundMessage)
