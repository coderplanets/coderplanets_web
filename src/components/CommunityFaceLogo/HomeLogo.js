import React from 'react'
import { useTheme } from 'styled-components'

import { ICON_BASE } from '@/config'

import { Logo } from './styles'
// import { Wrapper } from './styles'

const HomeLogo = ({ className }) => {
  const theme = useTheme()
  const src = `${ICON_BASE}/home/home-${theme.name}.png`

  return <Logo src={src} className={className} />
}

export default HomeLogo
