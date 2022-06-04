import { FC, memo } from 'react'

import Wallpaper from './Wallpaper'
import PostListLayout from './PostListLayout'
import BasicInfo from './BasicInfo'

import type { TUiSettings } from '../spec'
import { Wrapper } from '../styles/ui'

type TProps = {
  settings: TUiSettings
}

const UI: FC<TProps> = ({ settings }) => {
  return (
    <Wrapper>
      <BasicInfo />
      <PostListLayout />
      <Wallpaper wallpaper={settings.wallpaper} />
    </Wrapper>
  )
}

export default memo(UI)
