/*
 *
 * KanbanItem
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'
import { mockUsers } from '@/utils/mock'
import { UPVOTE_LAYOUT } from '@/constant'

import IconButton from '@/widgets/Buttons/IconButton'
import ArticleCatState from '@/widgets/ArticleCatState'
import Upvote from '@/widgets/Upvote'
import TagsList from '@/widgets/TagsList'

import { Wrapper, Header, Footer, Title, Desc } from './styles'

/* eslint-disable-next-line */
const log = buildLog('w:KanbanItem:index')

type TProps = {
  testid?: string
}

const KanbanItem: FC<TProps> = ({ testid = 'gtd-item' }) => {
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
        <TagsList items={tags} left={2} />
        <IconButton path="shape/more.svg" />
      </Header>
      <Title>增加看板，更新日志，与常见问题的功能和其他</Title>
      <Desc>
        服务于团队开发流程，以社区服务为基础，提供反馈社区工具箱，各种个性化设置等等
      </Desc>
      <Footer>
        <Upvote
          count={3}
          avatarList={mockUsers(3)}
          type={UPVOTE_LAYOUT.KANBAN}
        />
        <ArticleCatState cat="FEATURE" kanbanLayout />
        {/* <ArticleCatState cat="LOCK" state="LOCK" noBg /> */}
        {/* <ArticleCatState cat="QUESTION" state="RESOLVE" noBg /> */}
      </Footer>
    </Wrapper>
  )
}

export default memo(KanbanItem)
