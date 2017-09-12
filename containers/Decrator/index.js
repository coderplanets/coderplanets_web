/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import { ThemeProvider } from 'styled-components'

import globalStyles from '../../utils/global_styles'
import observer from '../../utils/mobx_utils'

const selector = ({ store }) => ({
  theme: store.theme,
})

const ThemeObserver = observer(selector, ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <div>
      <style jsx global>
        {globalStyles}
      </style>
      <div>{children}</div>
    </div>
  </ThemeProvider>
))

export default ThemeObserver
