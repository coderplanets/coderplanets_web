/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import styled, { ThemeProvider } from 'styled-components'

// import { selection } from 'polished'

import { storeSelector } from '../../utils/functions'
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

  .ant-btn-background-ghost.ant-btn-primary {
    color: ${theme('button.primary')};
    border-color: ${theme('button.primary')};
  }

  a:hover {
    color: ${theme('a.hover')};
  }
  a:active {
    color: ${theme('a.active')};
  }

  .ant-btn:focus,
  .ant-btn:hover {
    background-color: ${theme('button.hoverBg')};
  }
  .ant-btn:active {
    background-color: ${theme('button.activeBg')};
  }

  .ant-btn-primary {
    color: ${theme('button.fg')};
    background-color: ${theme('button.primary')};
    border-color: ${theme('button.primary')};
  }

  .ant-btn-clicked:after {
    border: ${theme('button.clicked')};
  }

  .ant-tabs-bar {
    border-bottom: ${theme('taber.baseline')};
  }
  .ant-tabs-ink-bar {
    background-color: ${theme('taber.bottom_bar')};
  }
  .ant-tabs-nav .ant-tabs-tab {
    color: ${theme('taber.normalText')};
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${theme('taber.activeText')};
    font-weight: bold;
  }
`
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

export default inject(storeSelector('theme'))(observer(ThemeObserver))
