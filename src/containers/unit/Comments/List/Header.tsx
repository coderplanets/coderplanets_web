import React from 'react'

import { ICON } from '@/config'
import Tooltip from '@/components/Tooltip'

import { Space } from '@/components/Common'
import { IconSwitcher } from '@/components/Switcher'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
  ActionsWrapper,
  ActionIcon,
  ExpandIcon,
  FoldIcon,
  IconDescText,
} from '../styles/list/header'

type TProps = {
  totalCount: number
  filterType: string
}

type TActionTooltip = {
  children: React.ReactNode
  desc: string
}

const ActionTooltip: React.FC<TActionTooltip> = ({ children, desc }) => {
  return (
    <Tooltip
      content={<IconDescText>{desc}</IconDescText>}
      placement="bottom"
      delay={1000}
      noPadding
    >
      {children}
    </Tooltip>
  )
}

const Header: React.FC<TProps> = ({ totalCount, filterType }) => {
  const switchItems = [
    {
      key: 'reply',
      iconSrc: `${ICON}/article/comment-reply-mode.svg`,
      desc: '回复模式',
    },
    {
      key: 'time',
      iconSrc: `${ICON}/article/comment-timeline-mode.svg`,
      desc: '时间线模式',
    },
  ]
  const isAllFolded = false

  return (
    <Wrapper>
      <TotalCountWrapper>
        {totalCount > 0 && (
          <TotalTitle id="lists-info">
            共收到 <TotalNum>{totalCount}</TotalNum> 条评论:
          </TotalTitle>
        )}
      </TotalCountWrapper>
      <ActionsWrapper>
        <ActionTooltip desc="关闭评论">
          <ActionIcon src={`${ICON}/shape/lock.svg`} />
        </ActionTooltip>
        <ActionTooltip desc="订阅讨论">
          <ActionIcon src={`${ICON}/article/notify-on.svg`} />
        </ActionTooltip>
        {isAllFolded ? (
          <ActionTooltip desc="展开全部">
            <FoldIcon src={`${ICON}/shape/expand-all.svg`} active />
          </ActionTooltip>
        ) : (
          <ActionTooltip desc="折叠全部">
            <ExpandIcon src={`${ICON}/shape/fold-all.svg`} />
          </ActionTooltip>
        )}
        <Space right={4} />
        <IconSwitcher
          items={switchItems}
          activeKey="reply"
          onChange={console.log}
        />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
