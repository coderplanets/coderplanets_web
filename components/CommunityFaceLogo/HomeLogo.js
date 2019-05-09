import React from 'react'
import { withTheme } from 'styled-components'

import { ICON_BASE } from '@config'

import { Logo } from './styles'
// import { Wrapper } from './styles'

const HomeLogo = ({ theme, className }) => {
  const src = `${ICON_BASE}/home/home-${theme.name}.png`

  return <Logo src={src} className={className} />
}

export default withTheme(HomeLogo)
