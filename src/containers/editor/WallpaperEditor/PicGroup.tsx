import { FC, memo } from 'react'
import { keys } from 'ramda'

import type { TWallpaperPic } from '@/spec'

import {
  Wrapper,
  Block,
  Image,
  ActiveSign,
  CheckIcon,
} from './styles/pic_group'

import { setWallpaper } from './logic'

type TProps = {
  wallpaper: string
  patternWallpapers: Record<string, TWallpaperPic>
}

const PicGroup: FC<TProps> = ({ wallpaper, patternWallpapers }) => {
  const patternKeys = keys(patternWallpapers)

  return (
    <Wrapper>
      {patternKeys.map((name) => (
        <Block key={name} $active={name === wallpaper}>
          {name === wallpaper && (
            <ActiveSign>
              <CheckIcon />
            </ActiveSign>
          )}
          <Image
            src={patternWallpapers[name].bgImage}
            onClick={() => setWallpaper(name)}
          />
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
