/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import globalStyles from '../../utils/global_styles'
import observer from '../../utils/mobx_utils'

const Container = styled.div`
  *::selection {
    background-color: ${props => props.theme.selection_bg};
  }

  ::-moz-selection {
    background-color: ${props => props.theme.selection_bg};
  }

  ::-o-selection {
    background-color: ${props => props.theme.selection_bg};
  }

  ::-ms-selection {
    background-color: ${props => props.theme.selection_bg};
  }

  *::-webkit-selection {
    background-color: ${props => props.theme.selection_bg};
  }
`

const selector = ({ store }) => ({
  theme: store.theme,
})

const ThemeObserver = observer(selector, ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <Container className="fuck">
      <style jsx global>
        {globalStyles}
      </style>
      <div>{children}</div>
    </Container>
  </ThemeProvider>
))

export default ThemeObserver
