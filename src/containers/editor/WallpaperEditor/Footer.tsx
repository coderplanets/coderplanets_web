import { FC, memo } from 'react'

import type { TWallpaperType } from '@/spec'
import { WALLPAPER_TYPE } from '@/constant'

import Button from '@/widgets/Buttons/Button'
import { Wrapper, ForbidImgIcon, ConfirmBtn } from './styles/footer'
import { changeWallpaper } from './logic'

type TProps = {
  wallpaperType: TWallpaperType
}
const Footer: FC<TProps> = ({ wallpaperType }) => {
  return (
    <Wrapper>
      {wallpaperType !== WALLPAPER_TYPE.NONE ? (
        <Button size="small" ghost noBorder onClick={() => changeWallpaper('')}>
          <ForbidImgIcon /> 空白壁纸
        </Button>
      ) : (
        <div />
      )}

      <ConfirmBtn size="small" space={13}>
        确定
      </ConfirmBtn>
    </Wrapper>
  )
}

export default memo(Footer)
