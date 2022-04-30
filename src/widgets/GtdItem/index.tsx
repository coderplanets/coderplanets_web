/*
 *
 * GtdItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { mockUsers } from '@/utils/mock'

import IconButton from '@/widgets/Buttons/IconButton'
import ArticleStateBadge from '@/widgets/ArticleStateBadge'
import Upvote from '@/widgets/Upvote'
import TagsList from '@/widgets/TagsList'

import { Wrapper, Header, Footer, Title, Desc } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:GtdItem:index')

type TProps = {
  testid?: string
}

const GtdItem: FC<TProps> = ({ testid = 'gtd-item' }) => {
  const tags = [
    {
      title: 'Groupher',
      raw: 'raw',
      color: 'red',
    },
  ]

  return (
    <Wrapper testid={testid}>
      <Header>
        <TagsList items={tags} mLeft={2} />
        <IconButton path="shape/more.svg" mRight={0} />
      </Header>
      <Title>增加看板，发布日志，与常见问题的功能和其他</Title>
      <Desc>
        服务于团队开发流程，以社区服务为基础，提供反馈社区工具箱，各种个性化设置等等
      </Desc>
      <Footer>
        <Upvote count={3} avatarList={mockUsers(3)} />
        <ArticleStateBadge type="FEATURE" kanbanLayout />
        {/* <ArticleStateBadge type="LOCK" state="LOCK" noBg /> */}
        {/* <ArticleStateBadge type="QUESTION" state="RESOLVE" noBg /> */}
      </Footer>
    </Wrapper>
  )
}

export default memo(GtdItem)
