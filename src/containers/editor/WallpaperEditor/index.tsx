/* *
 * WallpaperEditor
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { VIEW } from '@/constant'
import { Tabs } from '@/widgets/Switcher'

import type { TStore } from './store'
import { Wrapper, Content, Title } from './styles'
import PicGroup from './PicGroup'
import { useInit } from './logic' /* eslint-disable-next-line */

const TAB_OPTIONS = [
  {
    title: '内置背景',
    raw: 'buildin',
    localIcon: 'settings',
  },
  {
    title: '自定义图片',
    raw: 'custom',
    localIcon: 'settings',
  },
]

type TProps = {
  wallpaperEditor?: TStore
  testid?: string
}

const WallpaperEditorContainer: FC<TProps> = ({
  wallpaperEditor: store,
  testid = 'wallpaper-editor',
}) => {
  useInit(store)

  return (
    <Wrapper testid={testid}>
      <Title>背景设置</Title>
      <div>
        <Tabs
          items={TAB_OPTIONS}
          activeKey="buildin"
          onChange={console.log}
          view={VIEW.DRAWER}
        />
      </div>
      <Content>
        <div>图案</div>
        <PicGroup />

        <br />
        <div>渐变</div>
        <div>各种圆形渐变选项</div>
        <div>parttern 叠加选项</div>

        <br />
        <div>其它</div>
        <div>图片模糊</div>
      </Content>
    </Wrapper>
  )
}

export default bond(WallpaperEditorContainer, 'wallpaperEditor') as FC<TProps>
