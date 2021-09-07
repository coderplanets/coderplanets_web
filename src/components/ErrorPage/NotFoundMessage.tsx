import { FC, memo } from 'react'
import { isEmpty } from 'ramda'

import type { TMetric } from '@/spec'

import { METRIC, ROUTE } from '@/constant'
import { HintTitle, IssueLink } from './styles'

type TProps = {
  metric: TMetric
  path: string
}

const NotFoundMessage: FC<TProps> = ({ metric, path }) => {
  switch (metric) {
    case METRIC.USER:
      return (
        <HintTitle testid="user-error-title">
          未找到该用户
          {!isEmpty(path) && <span>: {path.split(`/${ROUTE.USER}/`)[1]}</span>}
        </HintTitle>
      )

    case METRIC.ARTICLE:
      return <HintTitle testid="article-error-title">未找到该帖子</HintTitle>

    case METRIC.COMMUNITY:
      return (
        <HintTitle testid="community-error-title">
          未找到社区
          {!isEmpty(path) && <span>: {path}</span>}, 欢迎
          <IssueLink href="/create/community" rel="noopener noreferrer">
            参与创建
          </IssueLink>
        </HintTitle>
      )

    default:
      return <HintTitle testid="not-found-error-title">未找到该页面</HintTitle>
  }
}

export default memo(NotFoundMessage)
