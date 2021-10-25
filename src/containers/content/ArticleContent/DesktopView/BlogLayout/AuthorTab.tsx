import { FC } from 'react'

import type { TMetric } from '@/spec'
import { buildLog } from '@/utils/logger'

import NoticeBar from '@/widgets/NoticeBar'
import { MainWrapper, ArticleWrapper } from '../../styles/desktop_view'
// import {
//   Wrapper,
//   Header,
//   PubDate,
//   Title,
//   Digest,
// } from '../../styles/desktop_view/blog_layout/feeds_tab'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent:AuthorTab')

type TProps = {
  metric: TMetric
}

const AuthorTab: FC<TProps> = ({ metric }) => {
  return (
    <MainWrapper metric={metric}>
      <ArticleWrapper>
        <NoticeBar
          type="notice"
          content=" 暂无作者信息，志愿者将尽快搜集公开资料完善博客作者的信息。如果你有这方面的资料，欢迎在博文讨论区补充/纠正。 "
          top={-5}
          bottom={20}
          left={-2}
        />
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default AuthorTab
