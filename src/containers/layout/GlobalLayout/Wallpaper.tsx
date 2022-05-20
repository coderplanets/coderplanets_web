import { FC, memo } from 'react'

import { parseWallpaper } from '@/utils/wallpaper'

import { Wrapper } from './styles/wallpaper'

type TProps = {
  wallpaper: string
}

const Wallpaper: FC<TProps> = ({ wallpaper }) => {
  const { background, effect } = parseWallpaper(wallpaper)

  // for custom image/svg
  // for use style object not passing props
  // @link see https://github.com/styled-components/styled-components/issues/3315#issuecomment-885977691
  return <Wrapper style={{ background }} effect={effect} />
}

export default memo(Wallpaper)
