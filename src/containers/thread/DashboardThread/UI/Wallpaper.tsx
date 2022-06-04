import { FC, memo, useCallback } from 'react'

import type { TWallpaper } from '@/spec'
import { WIDTH } from '@/utils/css'
import { callWallpaperEditor } from '@/utils/helper'
import { parseWallpaperRaw } from '@/utils/wallpaper'

import CheckLabel from '@/widgets/CheckLabel'
import { Space } from '@/widgets/Common'

import {
  Wrapper,
  Section,
  Title,
  Desc,
  PreviewWrapper,
  HoverMask,
  UploadIcon,
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
        <Desc>
          壁纸为宽屏（屏幕尺寸大于 {WIDTH.COMMUNITY.PAGE}
          ）下显示的背景图片，除内置壁纸外，你可以上传和社区话题相关的自定义图片。点击可更换。
        </Desc>
        <PreviewWrapper>
          <HoverMask onClick={handleCallEditor}>
            <UploadIcon />
            <PreviewImage style={{ background }} effect={effect} />
            <CheckLabel title="原图" top={10} left={-15} $active={false} />
          </HoverMask>

          <Space right={48} />
          <RealPreview>
            <PreviewImage style={{ background }} effect={effect} />
            <ContentBlock>
              <ContentBar long={30} />
              <ContentBar long={80} />
              <ContentBar long={60} />
              <ContentBar long={20} />
              <ContentBar long={70} />
              <ContentBar long={30} />
            </ContentBlock>
            <CheckLabel title="预览效果" top={10} left={-15} $active={false} />
          </RealPreview>
        </PreviewWrapper>
      </Section>
    </Wrapper>
  )
}

export default memo(Wallpaper)
