import { FC, memo } from 'react'

import type { TWallpaper } from '@/spec'
import { parseWallpaper } from '@/utils/wallpaper'

import { Wrapper } from './styles/wallpaper'

type TProps = {
  wallpaper: string
  wallpapers: Record<string, TWallpaper>
}

const Wallpaper: FC<TProps> = ({ wallpaper, wallpapers }) => {
  const { background, effect } = parseWallpaper(wallpapers, wallpaper)

  // for custom image/svg
  // for use style object not passing props
  // @link see https://github.com/styled-components/styled-components/issues/3315#issuecomment-885977691
  return <Wrapper style={{ background }} effect={effect} />
}

export default memo(Wallpaper)
