import { FC, memo, ReactNode } from 'react'

import type { TWallpaper } from '@/spec'
import { parseWallpaper } from '@/utils/wallpaper'

import { Wrapper } from './styles/wallpaper'

type TProps = {
  wallpaper: string
  wallpapers: Record<string, TWallpaper>
  children: ReactNode
}

const Wallpaper: FC<TProps> = ({ wallpaper, wallpapers, children }) => {
  const { background, effect } = parseWallpaper(wallpapers, wallpaper)

  // for custom image/svg
  // for use style object not passing props
  // @link see https://github.com/styled-components/styled-components/issues/3315#issuecomment-885977691
  return (
    <Wrapper style={{ background }} effect={effect}>
      {children}
    </Wrapper>
  )
}

export default memo(Wallpaper)
