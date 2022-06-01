import { FC, memo, useCallback } from 'react'

import type { TWallpaper } from '@/spec'
import { WIDTH } from '@/utils/css'
import { callWallpaperEditor } from '@/utils/helper'
import { parseWallpaperRaw } from '@/utils/wallpaper'

import { Space } from '@/widgets/Common'

import {
  Wrapper,
  Section,
  Title,
  Desc,
  PreviewWrapper,
  RealPreview,
  PreviewImage,
  ContentBlock,
  ContentBar,
} from '../styles/ui/wallpaper'

type TProps = {
  wallpaper: TWallpaper
}

const Wallpaper: FC<TProps> = ({ wallpaper }) => {
  const { background, effect } = parseWallpaperRaw(wallpaper)

  const handleCallEditor = useCallback(() => callWallpaperEditor(), [])

  return (
    <Wrapper>
      <Section>
        <Title>壁纸设置</Title>
        <PreviewWrapper>
          <PreviewImage
            onClick={handleCallEditor}
            style={{ background }}
            effect={effect}
          />
          <Space right={20} />
          <RealPreview>
            <PreviewImage
              onClick={handleCallEditor}
              style={{ background }}
              effect={effect}
            />
            <ContentBlock onClick={handleCallEditor}>
              <ContentBar long={30} />
              <ContentBar long={80} />
              <ContentBar long={60} />
              <ContentBar long={20} />
              <ContentBar long={70} />
              <ContentBar long={30} />
            </ContentBlock>
          </RealPreview>
        </PreviewWrapper>
        <Desc>
          壁纸为宽屏（屏幕尺寸大于 {WIDTH.COMMUNITY.PAGE}
          ）下显示的背景图片，除内置壁纸外，你可以上传和社区话题相关的自定义图片。点击可更换。
        </Desc>
      </Section>
    </Wrapper>
  )
}

export default memo(Wallpaper)
