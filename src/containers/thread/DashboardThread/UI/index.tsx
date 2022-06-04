import { FC, memo } from 'react'

import Portal from '../Portal'
import Wallpaper from './Wallpaper'
import PostListLayout from './PostListLayout'

import type { TUiSettings } from '../spec'
import { Wrapper } from '../styles/ui'

type TProps = {
  settings: TUiSettings
}

const UI: FC<TProps> = ({ settings }) => {
  return (
    <Wrapper>
      <Portal
        title="外观样式"
        desc="社区基本外观，主题色，以及常见布局自定义。"
      />

      <PostListLayout />
      <Wallpaper wallpaper={settings.wallpaper} />
    </Wrapper>
  )
}

export default memo(UI)
