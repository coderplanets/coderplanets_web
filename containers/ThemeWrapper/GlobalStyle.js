import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import { theme } from '../../utils'

const GlobalStyle = createGlobalStyle`
  ${normalize};
  html {
    background-color: ${theme('htmlBg')};
  }
  *::-moz-selection {
    background-color: ${theme('selectionBg')} !important;
  }

  *::selection {
    background-color: ${theme('selectionBg')} !important;
  }
  a:hover {
    color: ${theme('a.hover')};
  }
  a:active {
    color: ${theme('a.active')};
  }

  .iziToast {
    border: 1px solid !important;
    border-color: ${theme('toast.border')} !important;
    background-color: ${theme('toast.bg')} !important;
    min-height: 36px !important;
    padding: 2px 45px 0px 0 !important;
  }
  .iziToast > .iziToast-body .iziToast-title {
    color: ${theme('toast.title')} !important;
  }
  .iziToast-wrapper-topRight {
    top: 25px !important;
  }
  .iziToast > .iziToast-body .iziToast-message {
    color: ${theme('toast.message')} !important;
  }
`

export default GlobalStyle
