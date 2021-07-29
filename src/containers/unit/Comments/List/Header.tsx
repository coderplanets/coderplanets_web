import { FC, memo } from 'react'

import { ICON } from '@/config'
import { SVG } from '@/constant'

import { IconButton } from '@/components/Buttons'
import { IconSwitcher } from '@/components/Switcher'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
  ActionsWrapper,
} from '../styles/list/header'

type TProps = {
  totalCount: number
  filterType: string
}

const actionIconConfig = {
  mRight: 8,
  hintDelay: 200,
}

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

const Header: FC<TProps> = ({ totalCount, filterType }) => {
  const isAllFolded = false

  return (
    <Wrapper>
      <TotalCountWrapper>
        {totalCount > 0 && (
          <TotalTitle id="lists-info">
            共 <TotalNum>{totalCount}</TotalNum> 条评论:
          </TotalTitle>
        )}
      </TotalCountWrapper>
      <ActionsWrapper>
        <IconButton
          icon={SVG.LOCK}
          hint="关闭评论"
          mTop={-1}
          {...actionIconConfig}
        />
        <IconButton
          path="article/notify-on.svg"
          hint="订阅讨论"
          {...actionIconConfig}
        />

        {isAllFolded ? (
          <IconButton
            icon={SVG.EXPAND}
            size={13}
            hint="展开全部"
            active
            {...actionIconConfig}
          />
        ) : (
          <IconButton
            icon={SVG.FOLD}
            size={13}
            hint="折叠全部"
            {...actionIconConfig}
          />
        )}
        <IconSwitcher
          items={switchItems}
          activeKey="reply"
          onChange={console.log}
        />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
