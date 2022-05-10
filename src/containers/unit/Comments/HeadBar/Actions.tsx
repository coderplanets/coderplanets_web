import { FC, memo, Fragment } from 'react'

import { ICON } from '@/config'
import { SVG } from '@/constant'

import IconButton from '@/widgets/Buttons/IconButton'
import { IconSwitcher } from '@/widgets/Switcher'

import { MODE, API_MODE } from '../constant'
import type { TMode } from '../spec'
import type { TProps as TBase } from './index'
import { foldAllComments, expandAllComments, onModeChange } from '../logic'

type TProps = Pick<TBase, 'mode' | 'apiMode' | 'isAllFolded'>

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

const Actions: FC<TProps> = ({ mode, isAllFolded, apiMode }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default memo(Actions)
