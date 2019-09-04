import { createGlobalStyle } from 'styled-components'
// import { theme, cs } from '@utils'

const RichEditorStyle = createGlobalStyle`
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
