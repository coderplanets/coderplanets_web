import { FC } from 'react'

import type { TMetric, TRSSAuthor } from '@/spec'
import { buildLog } from '@/utils/logger'

import NoticeBar from '@/widgets/NoticeBar'
import DotDivider from '@/widgets/DotDivider'

import {
  MainWrapper,
  ArticleWrapper,
  UserName,
  Intro,
  GithubIcon,
  TwitterIcon,
} from '../../styles/desktop_view/blog_layout/author_tab'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent:AuthorTab')

type TProps = {
  metric: TMetric
  author: TRSSAuthor
}

const AuthorTab: FC<TProps> = ({ metric, author }) => {
  if (!author) {
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

  const { name, intro, twitter, github } = author

  return (
    <MainWrapper metric={metric}>
      <ArticleWrapper>
        <div>
          <UserName>
            {name}
            {(twitter || github) && <DotDivider space={12} />}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            )}

            {twitter && (
              <a href={twitter} target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            )}
          </UserName>
          <Intro>{intro}</Intro>
        </div>
      </ArticleWrapper>
    </MainWrapper>
  )
}

export default AuthorTab
