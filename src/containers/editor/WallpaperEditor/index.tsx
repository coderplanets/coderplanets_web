/* *
 * WallpaperEditor
 *
 */

import { FC } from 'react'

// import { buildLog } from '@/utils/logger'
import { bond } from '@/utils/mobx'
import { VIEW, DRAWER_SCROLLER } from '@/constant'

import { Br } from '@/widgets/Common'
import Checker from '@/widgets/Checker'
import { Tabs } from '@/widgets/Switcher'
import CustomScroller from '@/widgets/CustomScroller'
import Button from '@/widgets/Buttons/Button'

import type { TStore } from './store'

import PicGroup from './PicGroup'
import GradientGroup from './GradientGroup'

import {
  Wrapper,
  Banner,
  BannerTitle,
  Content,
  Title,
  SettingWrapper,
  Footer,
  ConfirmBtn,
} from './styles'

import { useInit, togglePattern } from './logic'

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
  const { wallpaper, gradientWallpapers, patternWallpapers, hasPattern } = store
  console.log('bbb hasPattern -> ', hasPattern)

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
        barSize="small"
        showShadow={false}
        autoHide={false}
      >
        <Content>
          <Title>图案:</Title>
          <PicGroup
            wallpaper={wallpaper}
            patternWallpapers={patternWallpapers}
          />
          <Br top={20} />
          <Title>纯色渐变:</Title>
          <GradientGroup
            wallpaper={wallpaper}
            gradientWallpapers={gradientWallpapers}
          />
          <Br top={25} />
          <Title>附加效果:</Title>
          <SettingWrapper>
            <Br top={20} />
            <Checker checked={hasPattern} onChange={togglePattern}>
              叠加花纹
            </Checker>
            <Br top={10} />
            <Checker checked={false}>模糊效果</Checker>
            <Br top={50} />
          </SettingWrapper>
        </Content>
      </CustomScroller>
      <Footer>
        <Button size="small" ghost noBorder>
          不设背景
        </Button>
        <ConfirmBtn size="small">确定</ConfirmBtn>
      </Footer>
    </Wrapper>
  )
}

export default bond(WallpaperEditorContainer, 'wallpaperEditor') as FC<TProps>
