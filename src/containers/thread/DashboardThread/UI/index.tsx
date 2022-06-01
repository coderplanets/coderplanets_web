import { FC, memo } from 'react'

import Wallpaper from './Wallpaper'
import { Wrapper } from '../styles/ui'

import type { TUiSettings } from '../spec'

type TProps = {
  settings: TUiSettings
}

const UI: FC<TProps> = ({ settings }) => {
  return (
    <Wrapper>
      <Wallpaper wallpaper={settings.wallpaper} />
    </Wrapper>
  )
}

export default memo(UI)
