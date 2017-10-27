/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import styled, { ThemeProvider } from 'styled-components'
// import { selection } from 'polished'

import { theme } from '../../utils/themes'
import globalStyles from '../../utils/global_styles'
// import observer from '../../utils/mobx_utils'

/*
*::selection {
  background-color: ${theme('selection_bg')};
}

  ::-moz-selection {
    background-color: ${theme('selection_bg')};
  }

  ::-o-selection {
    background-color: ${theme('selection_bg')};
  }

  ::-ms-selection {
    background-color: ${theme('selection_bg')};
  }

  *::-webkit-selection {
    background-color: ${theme('selection_bg')};
  }
 */

// ${selection({ backgroundColor: 'tomato' }, '*')};
const Container = styled.div`
  *::-moz-selection {
    background-color: ${theme('selection_bg')};
  }

  *::selection {
    background-color: ${theme('selection_bg')};
  }
`

const selector = ({ store }) => ({
  theme: store.theme,
})

const ThemeObserver = ({ children, theme }) => (
  <ThemeProvider theme={theme.themeData}>
    <Container>
      <style jsx global>
        {globalStyles}
      </style>
      <div>{children}</div>
    </Container>
  </ThemeProvider>
)

export default inject(selector)(observer(ThemeObserver))
