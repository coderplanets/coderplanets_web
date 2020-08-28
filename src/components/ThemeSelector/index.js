/*
 *
 * ThemeSelector
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@/utils'

import DotSelector from './DotSelector'
import CardSelector from './CardSelector'
import GallerySelector from './GallerySelector'

/* eslint-disable-next-line */
const log = buildLog('c:ThemeSelector:index')

const ThemeSelector = ({ displayStyle, curTheme, changeTheme }) => {
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

ThemeSelector.propTypes = {
  curTheme: T.string,
  displayStyle: T.oneOf(['default', 'card', 'gallery']),
  changeTheme: T.func.isRequired,
  // https://www.npmjs.com/package/prop-types
}

ThemeSelector.defaultProps = {
  curTheme: '',
  displayStyle: 'default',
}

export default React.memo(ThemeSelector)
