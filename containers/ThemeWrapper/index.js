/*
 * make children compoent cound reach the props.theme object
 * because mobx's observer mechanism, we should manually watch the theme
 * otherwhise the render will not be triggled
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import { ThemeProvider } from 'styled-components'

import { storePlug } from '../../utils'

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
            background-color: ${theme.themeData.selectionBg} !important;
          }

          *::selection {
            background-color: ${theme.themeData.selectionBg} !important;
          }
          a:hover {
            color: ${theme.themeData.a.hover};
          }
          a:active {
            color: ${theme.themeData.a.active};
          }

          .iziToast {
            border: 1px solid !important;
            border-color: ${theme.themeData.toast.border} !important;
            background-color: ${theme.themeData.toast.bg} !important;
            min-height: 36px !important;
            padding: 2px 45px 0px 0 !important;
          }
          .iziToast > .iziToast-body .iziToast-title {
            color: ${theme.themeData.toast.title} !important;
          }
          .iziToast-wrapper-topRight {
            top: 25px !important;
          }
          .iziToast > .iziToast-body .iziToast-message {
            color: ${theme.themeData.toast.message} !important;
          }
        `}</style>
        <div>{children}</div>
      </CodeHighlight>
    </AntOverWrite>
  </ThemeProvider>
)

export default inject(storePlug('theme'))(observer(ThemeObserver))
