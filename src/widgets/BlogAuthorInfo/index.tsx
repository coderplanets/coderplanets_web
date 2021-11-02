import { FC, memo, Fragment } from 'react'

import type { TRSSAuthor } from '@/spec'
import { buildLog } from '@/utils/logger'

import NoticeBar from '@/widgets/NoticeBar'
import DotDivider from '@/widgets/DotDivider'

import { UserName, Intro, GithubIcon, TwitterIcon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('C:BlogContent:AuthorTab')

type TProps = {
  author: TRSSAuthor
}

const BlogAuthorInfo: FC<TProps> = ({ author }) => {
  return (
    <Fragment>
      {!author ? (
        <NoticeBar
          type="notice"
          content=" 暂无作者信息，志愿者将尽快搜集公开资料完善博客作者的信息。如果你有这方面的资料，欢迎在博文讨论区补充/纠正。 "
          top={-5}
          bottom={20}
          left={-2}
        />
      ) : (
        <div>
          <UserName>
            {author.name}
            {(author.twitter || author.github) && <DotDivider space={12} />}
            {author.github && (
              <a href={author.github} target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
            )}

            {author.twitter && (
              <a href={author.twitter} target="_blank" rel="noreferrer">
                <TwitterIcon />
              </a>
            )}
          </UserName>
          <Intro>{author.intro}</Intro>
        </div>
      )}
    </Fragment>
  )
}

export default memo(BlogAuthorInfo)
