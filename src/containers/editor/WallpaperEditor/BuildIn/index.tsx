/* *
 * WallpaperEditor
 *
 */

import { FC, Fragment } from 'react'

import { WALLPAPER_TYPE } from '@/constant'

import { Br } from '@/widgets/Common'
import Checker from '@/widgets/Checker'

import PatternGroup from './PatternGroup'
import GradientGroup from './GradientGroup'
import AnglePanel from './AnglePanel'

import type { TWallpaperData } from '../spec'
import {
  Wrapper,
  Title,
  SettingWrapper,
  GeneralSettings,
  Divider,
  AngleSettings,
} from '../styles/build_in'
import { togglePattern, toggleBlur } from '../logic'

type TProps = {
  wallpaperData: TWallpaperData
}

const BuildIn: FC<TProps> = ({ wallpaperData }) => {
  const {
    wallpaper,
    wallpaperType,
    gradientWallpapers,
    patternWallpapers,
    hasPattern,
    hasBlur,
    direction,
  } = wallpaperData

  return (
    <Wrapper>
      <Title>图案:</Title>
      <PatternGroup
        wallpaper={wallpaper}
        patternWallpapers={patternWallpapers}
      />
      <Br top={20} />
      <Title>纯色渐变:</Title>
      <GradientGroup
        wallpaper={wallpaper}
        gradientWallpapers={gradientWallpapers}
      />
      <Br top={25} />
      <SettingWrapper>
        <GeneralSettings>
          <Title>附加效果:</Title>
          {wallpaperType === WALLPAPER_TYPE.GRADIENT && (
            <Fragment>
              <Br top={20} />
              <Checker checked={hasPattern} onChange={togglePattern}>
                叠加印纹
              </Checker>
            </Fragment>
          )}

          <Br top={10} />
          <Checker checked={hasBlur} onChange={toggleBlur}>
            模糊效果
          </Checker>
        </GeneralSettings>

        {wallpaperType === WALLPAPER_TYPE.GRADIENT && (
          <Fragment>
            <Divider />

            <AngleSettings>
              <Title>渐变方向:</Title>
              <AnglePanel direction={direction} />
            </AngleSettings>
          </Fragment>
        )}
      </SettingWrapper>
      <Br top={50} />
    </Wrapper>
  )
}

export default BuildIn
