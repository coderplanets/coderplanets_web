import { FC, memo } from 'react'

import type { TCommentsState } from '@/spec'
import { ICON } from '@/config'
import { SVG } from '@/constant'

import { LineDivider } from '@/widgets/Common'
import Button from '@/widgets/Buttons/Button'
import IconButton from '@/widgets/Buttons/IconButton'
import { IconSwitcher } from '@/widgets/Switcher'
import { LavaLampLoading } from '@/widgets/Loading'

import {
  Wrapper,
  TotalTitle,
  TotalCountWrapper,
  TotalNum,
  ActionsWrapper,
  EditIcon,
} from '../styles/list/header'

import { MODE, API_MODE } from '../constant'
import type { TMode, TAPIMode } from '../spec'
import { foldAllComments, expandAllComments, onModeChange } from '../logic'

type TProps = {
  mode: TMode
  apiMode: TAPIMode
  isAllFolded: boolean
  loading: boolean
  basicState: TCommentsState
}

const actionIconConfig = {
  right: 11,
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

const Header: FC<TProps> = ({
  basicState,
  mode,
  isAllFolded,
  loading,
  apiMode,
}) => {
  return (
    <Wrapper>
      <TotalCountWrapper>
        <TotalTitle>
          共
          <TotalNum highlight={basicState.isViewerJoined}>
            {basicState.totalCount}
          </TotalNum>
          条讨论:
        </TotalTitle>
      </TotalCountWrapper>
      <ActionsWrapper>
        {loading && <LavaLampLoading right={15} />}

        <Button size="small" space={10}>
          <EditIcon />
          讨论
        </Button>
        <LineDivider left={18} />

        {/* {apiMode === API_MODE.ARTICLE && (
          <IconButton
            icon={SVG.LOCK}
            hint="关闭讨论"
            {...actionIconConfig}
            top={-1}
          />
        )} */}

        {/* {apiMode === API_MODE.ARTICLE && (
          <IconButton
            path="article/notify-on.svg"
            hint="订阅讨论"
            {...actionIconConfig}
          />
        )} */}

        {isAllFolded ? (
          <IconButton
            {...actionIconConfig}
            icon={SVG.EXPAND}
            size={13}
            hint="展开全部"
            active
            onClick={expandAllComments}
          />
        ) : (
          <IconButton
            icon={SVG.FOLD}
            {...actionIconConfig}
            size={13}
            hint="折叠全部"
            onClick={foldAllComments}
          />
        )}
        {apiMode === API_MODE.ARTICLE && (
          <IconSwitcher
            items={switchItems}
            activeKey={mode}
            onChange={({ key }) => onModeChange(key as TMode)}
          />
        )}
      </ActionsWrapper>
    </Wrapper>
  )
}

export default memo(Header)
