/*
 *
 * ThemeSelector
 *
 */

import { FC, memo } from 'react'

import { buildLog } from '@/utils/logger'

import DotSelector from './DotSelector'
import CardSelector from './CardSelector'
import GallerySelector from './GallerySelector'

/* eslint-disable-next-line */
const log = buildLog('w:ThemeSelector:index')

type TProps = {
  curTheme?: string
  displayStyle?: 'default' | 'card' | 'gallery'
  changeTheme?: (theme: string) => void
}

const ThemeSelector: FC<TProps> = ({ displayStyle, curTheme, changeTheme }) => {
  switch (displayStyle) {
    case 'card': {
      return <CardSelector curTheme={curTheme} changeTheme={changeTheme} />
    }
    case 'gallery': {
      return <GallerySelector curTheme={curTheme} changeTheme={changeTheme} />
    }
    default: {
      return <DotSelector curTheme={curTheme} changeTheme={changeTheme} />
    }
  }
}

export default memo(ThemeSelector)
