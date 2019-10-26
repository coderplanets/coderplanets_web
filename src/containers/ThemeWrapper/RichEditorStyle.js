import { createGlobalStyle } from 'styled-components'
import { theme } from '@utils'

// header see: https://github.com/editor-js/header
// quote see: https://github.com/editor-js/quote
// list see: https://github.com/editor-js/list
// marker see: https://github.com/editor-js/marker

const RichEditorStyle = createGlobalStyle`
  .ce-toolbox__button--active {
      -webkit-animation: bounceIn .35s .5;
      animation: bounceIn .35s .5;
  }
  .ce-toolbar__plus--active, .ce-toolbar__plus:hover {
    color: ${theme('richEditor.iconActive')};
  }
  .ce-inline-tool--active, .ce-inline-tool:hover {
    color: ${theme('richEditor.iconActive')};
    background-color: ${theme('richEditor.iconActiveBg')};
  }
  .ce-inline-tool {
    color: ${theme('richEditor.icon')};
  }

  .ce-toolbox__button--active, .ce-toolbox__button:hover {
    color: ${theme('richEditor.iconActive')};
    background-color: ${theme('richEditor.iconActiveBg')};
    border-radius: 6px;
  }

  .ce-conversion-toolbar, .ce-inline-toolbar {
    background-color: ${theme('richEditor.toolbarBg')};
    border: 1px solid;
    border-color: ${theme('richEditor.borderColor')};
  }

  .ce-conversion-toolbar:before, .ce-inline-toolbar:before {
    border-top: 1px solid;
    border-right: 1px solid;
    border-top-color: ${theme('richEditor.borderColor')};
    border-right-color: ${theme('richEditor.borderColor')};

    border-top-right-radius: 3px;
    width: 10px;
    height: 10px;
    background-color: ${theme('richEditor.arrowBg')};
    border-radius: 100%;
  }

  .ce-delimiter:before {
    border-bottom: 1px solid;
    border-bottom-color: ${theme('richEditor.delimiter')};
  }

  // tmp
  .link-tool__input {
    border: 1px solid #e6e3e3 !important;
    border-radius: 12px !important;
  }

  .link-tool__content--rendered {
    border-radius: 15px;
    height: 120px;
    max-height: 140px;
    padding: 10px 20px;
    width: 65%;
    margin-left: 15%;
    min-height: 120px;
    max-height: 150px;
    padding: 12px 20px !important;
    background-color: hsla(0,0%,96.5%,.88) !important;
  }

  .link-tool__title {
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .link-tool__description {
    margin-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #c5c5c5;
  }

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

  .cdx-checklist__item--checked .cdx-checklist__item-checkbox {
    background: ${theme('richEditor.checklistBg')};
    border-color: ${theme('richEditor.checklistBorder')};
  }

  .tippy-tooltip.light-theme {
    box-shadow: 0 6px 12px -6px rgba(131,147,173,.46), 5px -12px 34px -13px rgba(97,105,134,.6), 0 26px 52px 3px rgba(147,165,186,.24);
    border: 1px solid;
    border-color: ${theme('richEditor.borderColor')};
  }

  .tippy-tooltip.light-theme[data-placement^=bottom] .tippy-arrow {
    border-width: 0 !important;
    border-bottom-color: transparent !important;
    width: 8px;
    height: 8px;
    background-color: ${theme('richEditor.arrowBg')};
    border-radius: 100%;
  }

  .tippy-tooltip[data-placement^=bottom] .tippy-arrow {
    border-width: none !important;
    border-bottom-color: none !important;
    margin: 0 -4px !important;
    transform-origin: 50% 7px;
    top: -5px !important;
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

  .embed-top-success {
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
    border-top: 3px solid #2aa198 !important;
  }

  .embed-top-error {
    border-top-left-radius: 3px !important;
    border-top-right-radius: 3px !important;
    border-top: 3px solid tomato !important;
  }

  .embed-top-default {
    border: 1px solid !important;
    border-color: #e4e4e4 !important;
  }
`

export default RichEditorStyle
