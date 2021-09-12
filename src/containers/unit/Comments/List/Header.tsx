import { FC, memo } from 'react'

import { ICON } from '@/config'
import { SVG } from '@/constant'

import IconButton from '@/components/Buttons/IconButton'
import { IconSwitcher } from '@/components/Switcher'
import { LavaLampLoading } from '@/components/dynamic'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
  ActionsWrapper,
} from '../styles/list/header'

import { MODE } from '../constant'
import type { TMode } from '../spec'
import { foldAllComments, expandAllComments, onModeChange } from '../logic'

type TProps = {
  totalCount: number
  mode: TMode
  isAllFolded: boolean
  loading: boolean
}

const actionIconConfig = {
  mRight: 8,
  hintDelay: 200,
}

const switchItems = [
  {
    key: MODE.REPLIES,
    iconSrc: `${ICON}/article/comment-reply-mode.svg`,
    desc: '回复模式',
  },
  {
    key: MODE.TIMELINE,
    iconSrc: `${ICON}/article/comment-timeline-mode.svg`,
    desc: '时间线模式',
  },
]

const Header: FC<TProps> = ({ totalCount, mode, isAllFolded, loading }) => {
  return (
    <Wrapper>
      <TotalCountWrapper>
        <TotalTitle id="lists-info">
          共 <TotalNum>{totalCount}</TotalNum> 条讨论:
        </TotalTitle>
      </TotalCountWrapper>
      <ActionsWrapper>
        {loading && <LavaLampLoading right={15} />}
        <IconButton
          icon={SVG.LOCK}
          hint="关闭讨论"
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
            onClick={expandAllComments}
          />
        ) : (
          <IconButton
            icon={SVG.FOLD}
            size={13}
            hint="折叠全部"
            {...actionIconConfig}
            onClick={foldAllComments}
          />
        )}
        <IconSwitcher
          items={switchItems}
          activeKey={mode}
          onChange={({ key }) => onModeChange(key as TMode)}
        />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
