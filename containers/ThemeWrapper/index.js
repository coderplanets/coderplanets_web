/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { storePlug } from 'utils'

// import MarkDownStyle from './MarkDownStyle'
import CodeSyxHighlight from './CodeSyxHighlight'
import AntUIOverWrite from './AntUIOverWrite'
import GlobalStyle from './GlobalStyle'

const ThemeObserver = ({ children, theme }) => (
  <ThemeProvider theme={theme.themeData}>
    <React.Fragment>
      <div>{children}</div>
      <CodeSyxHighlight />
      <AntUIOverWrite />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
)

export default inject(storePlug('theme'))(observer(ThemeObserver))
