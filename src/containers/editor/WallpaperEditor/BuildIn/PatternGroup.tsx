import { FC, memo } from 'react'
import { keys } from 'ramda'

import type { TWallpaperPic } from '@/spec'

import {
  Wrapper,
  Block,
  Image,
  ActiveSign,
  CheckIcon,
} from '../styles/build_in/pattern_group'

import { changeWallpaper } from '../logic'

type TProps = {
  wallpaper: string
  patternWallpapers: Record<string, TWallpaperPic>
}

const PatternGroup: FC<TProps> = ({ wallpaper, patternWallpapers }) => {
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
            onClick={() => changeWallpaper(name)}
          />
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PatternGroup)
