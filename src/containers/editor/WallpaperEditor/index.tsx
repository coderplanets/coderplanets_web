/* *
 * WallpaperEditor
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { VIEW, DRAWER_SCROLLER } from '@/constant'

import { Tabs } from '@/widgets/Switcher'
import CustomScroller from '@/widgets/CustomScroller'
import Button from '@/widgets/Buttons/Button'

import type { TStore } from './store'

import PicGroup from './PicGroup'
import GradientGroup from './GradientGroup'

import { Wrapper, Banner, BannerTitle, Content, Title, Footer } from './styles'

import { useInit } from './logic' /* eslint-disable-next-line */

const TAB_OPTIONS = [
  {
    title: '内置壁纸',
    raw: 'buildin',
    localIcon: 'settings',
  },
  {
    title: '上传壁纸',
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
  const { wallpaper } = store

  return (
    <Wrapper testid={testid}>
      <Banner>
        <BannerTitle>壁纸设置</BannerTitle>
        <div>
          <Tabs
            items={TAB_OPTIONS}
            activeKey="buildin"
            onChange={console.log}
            view={VIEW.DRAWER}
          />
        </div>
      </Banner>

      <CustomScroller
        instanceKey={DRAWER_SCROLLER}
        direction="vertical"
        height="calc(100vh - 226px)"
        barSize="medium"
        showShadow={false}
        autoHide={false}
      >
        <Content>
          <Title>图案:</Title>
          <PicGroup wallpaper={wallpaper} />
          <br />
          <Title>纯色渐变:</Title>
          <GradientGroup wallpaper={wallpaper} />
          <br />
          <br />
          <div>叠加花纹</div>
          <div>模糊效果</div>
        </Content>
      </CustomScroller>
      <Footer>
        <Button size="small" ghost noBorder>
          不设背景
        </Button>
        <Button size="medium">确定</Button>
      </Footer>
    </Wrapper>
  )
}

export default bond(WallpaperEditorContainer, 'wallpaperEditor') as FC<TProps>
