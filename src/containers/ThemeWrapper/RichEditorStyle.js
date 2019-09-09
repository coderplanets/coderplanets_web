import { createGlobalStyle } from 'styled-components'
import { theme } from '@utils'

// header see: https://github.com/editor-js/header
// quote see: https://github.com/editor-js/quote
// list see: https://github.com/editor-js/list
// marker see: https://github.com/editor-js/marker

const RichEditorStyle = createGlobalStyle`

  .cdx-quote__text {
    min-height: 0 !important;
    border-left: 3px solid !important;
    border-left-color: ${theme('richEditor.blockquoteBorder')} !important;
    color: ${theme('richEditor.blockquoteFg')};
  }

  .cdx-input {
    border: none;
    box-shadow: none;
  }

  .cdx-list__item {
    a {
      text-decoration: none;
      cursor: pointer;
      border-bottom: 1px solid #00C3FB;
      color: #00C3FB;
      padding-bottom: 1px;
    }
  }

  .ce-delimiter:before {
    display: inline-block;
    content: " " !important;
    font-size: 15px;
    width: 150px;
    border-bottom: 1px solid;
    border-bottom-color: lightgrey;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .cps-viewer {
    padding: 10px;
    background: white;
    font-size: 15px;
    color: #313649;
    line-height: 1.6;
    letter-spacing: .005em;

    h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    h3 {
      display: block;
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    .cps-viewer-header {
      padding: 1em 0;
      margin: 0;
      line-height: 1.5em;
      outline: none;
    }
  
    .cps-viewer-paragraph {
      line-height: 1.6em;
      outline: none;
    }
    ul {
      list-style: disc;
      margin: 0;
      padding-left: 40px;
      outline: none;
    }
    ul li {
      padding: 5.5px 0 5.5px 3px;
      line-height: 1.6em;
    }

    ol {
      list-style: decimal;
      margin: 0;
      padding-left: 40px;
      outline: none;
    }

    ol li {
      padding: 5.5px 0 5.5px 3px;
      line-height: 1.6em;
    }

    .cdx-marker {
      background-color: #FCF9D8;
    }
  }
`

export default RichEditorStyle
