/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { storePlug } from 'utils'

// import MarkDownStyle from './MarkDownStyle'
import CodeSyxHighlight from './CodeSyxHighlight'
import AntUIOverWrite from './AntUIOverWrite'
import GlobalStyle from './GlobalStyle'

const ThemeObserver = ({ children, theme: { themeData } }) => (
  <ThemeProvider theme={themeData}>
    <React.Fragment>
      <Helmet meta={[{ name: 'theme-color', content: themeData.mobileTab }]} />
      <div>{children}</div>
      <CodeSyxHighlight />
      <AntUIOverWrite />
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>
)

export default inject(storePlug('theme'))(observer(ThemeObserver))

// about meta theme-color
// see: https://stackoverflow.com/questions/26960703/how-to-change-the-color-of-header-bar-and-address-bar-in-newest-chrome-version-o
