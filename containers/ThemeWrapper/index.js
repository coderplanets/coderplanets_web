/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { storeSelector } from '../../utils'

import AntOverWrite from './AntOverWrite'
import NormalizeStyle from './NormalizeStyle'
// import MarkDownStyle from './MarkDownStyle'
import CodeHighlight from './CodeHighlight'

// TODO: mv MarkDownStyle && CodeHighlight to it's own container

const ThemeObserver = ({ children, theme }) => (
  <ThemeProvider theme={theme.themeData}>
    <AntOverWrite>
      <CodeHighlight>
        <style global jsx>
          {NormalizeStyle}
        </style>
        <style global jsx>{`
          html {
            background-color: ${theme.themeData.htmlBg};
          }
          *::-moz-selection {
            background-color: ${theme.themeData.selection_bg} !important;
          }

          *::selection {
            background-color: ${theme.themeData.selection_bg} !important;
          }

          a:hover {
            color: ${theme.themeData.a.hover};
          }
          a:active {
            color: ${theme.themeData.a.active};
          }
        `}</style>
        <div>{children}</div>
      </CodeHighlight>
    </AntOverWrite>
  </ThemeProvider>
)

export default inject(storeSelector('theme'))(observer(ThemeObserver))
