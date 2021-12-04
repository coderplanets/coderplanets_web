import { FC, memo } from 'react'
import { isEmpty } from 'ramda'
import Linker from '@/widgets/Linker'

import type { TMetric } from '@/spec'

import { METRIC, ROUTE } from '@/constant'
import { HintTitle } from './styles'

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
          <Linker
            src={`/${ROUTE.APPLY_COMMUNITY}`}
            external={false}
            text="参与创建"
            inline
            left={3}
            right={3}
          />
        </HintTitle>
      )

    default:
      return <HintTitle testid="not-found-error-title">未找到该页面</HintTitle>
  }
}

export default memo(NotFoundMessage)
