import { FC, memo } from 'react'

import type { TWallpaperType } from '@/spec'
import { WALLPAPER_TYPE } from '@/constant'

import { SpaceGrow } from '@/widgets/Common'

import YesOrNoButtons from '@/widgets/Buttons/YesOrNoButtons'
import Button from '@/widgets/Buttons/Button'

import { Wrapper, ForbidImgIcon } from './styles/footer'
import { changeWallpaper, rollbackEdit } from './logic'

type TProps = {
  wallpaperType: TWallpaperType
  isTouched: boolean
}
const Footer: FC<TProps> = ({ wallpaperType, isTouched }) => {
  return (
    <Wrapper>
      {wallpaperType !== WALLPAPER_TYPE.NONE ? (
        <Button size="small" ghost onClick={() => changeWallpaper('')}>
          <ForbidImgIcon /> 空白壁纸
        </Button>
      ) : (
        <div />
      )}
      <SpaceGrow />

      {isTouched ? (
        <YesOrNoButtons
          cancelText="放弃变更"
          confirmText="确定"
          space={4}
          onCancel={() => rollbackEdit()}
        />
      ) : (
        <Button size="small" space={10}>
          确定
        </Button>
      )}
    </Wrapper>
  )
}

export default memo(Footer)
