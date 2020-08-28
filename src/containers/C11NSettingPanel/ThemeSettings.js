import React from 'react'

import ThemeSelector from '@/components/ThemeSelector'

import { Wrapper } from './styles/theme_settings'
import { changeTheme } from './logic'

const ThemeSettings = ({ curTheme }) => {
  return (
    <Wrapper>
      <ThemeSelector
        curTheme={curTheme}
        changeTheme={changeTheme}
        displayStyle="gallery"
      />
    </Wrapper>
  )
}

export default ThemeSettings
