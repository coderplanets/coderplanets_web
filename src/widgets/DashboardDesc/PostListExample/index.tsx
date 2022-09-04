/*
 *
 * DashboardDesc
 *
 */

import { FC, memo, useState } from 'react'

import { SVG } from '@/constant'
import { buildLog } from '@/utils/logger'

import { IconSwitcher } from '@/widgets/Switcher'
import NoticeBar from '@/widgets/NoticeBar'

import type { TPreviewDevice } from '../spec'
import { DEMO_POSTS, PREVIEW_MODE } from '../constant'
import Mobile from './Mobile'
import Desktop from './Desktop'

import { Wrapper, MediaWrapper } from '../styles/post_list_example'

/* eslint-disable-next-line */
const log = buildLog('w:DashboardDesc:index')

const switchItems = [
  {
    key: PREVIEW_MODE.DESKTOP,
    icon: SVG.DESKTOP,
    desc: '桌面端',
  },
  {
    key: PREVIEW_MODE.MOBILE,
    icon: SVG.MOBILE,
    desc: '手机端',
  },
]

const PostListExample: FC = () => {
  const [mode, setMode] = useState<TPreviewDevice>(PREVIEW_MODE.DESKTOP)

  return (
    <Wrapper>
      <NoticeBar
        type="info"
        content="列表中的帖子仅为展示布局参考，非真实存在。"
        bottom={30}
      />

      <MediaWrapper>
        <IconSwitcher
          items={switchItems}
          activeKey={mode}
          onChange={(item) => setMode(item.key as TPreviewDevice)}
        />
      </MediaWrapper>

      {mode === PREVIEW_MODE.DESKTOP && <Desktop articles={DEMO_POSTS} />}
      {mode === PREVIEW_MODE.MOBILE && <Mobile articles={DEMO_POSTS} />}
    </Wrapper>
  )
}

export default memo(PostListExample)
