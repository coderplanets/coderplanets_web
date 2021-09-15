import { createGlobalStyle } from 'styled-components'
import { theme } from '@/utils/themes'

// header see: https://github.com/editor-js/header
// quote see: https://github.com/editor-js/quote
// list see: https://github.com/editor-js/list
// marker see: https://github.com/editor-js/marker

const mateColor = '#30B1AC'
const linkColor = '#067db5'

const RichEditorStyle = createGlobalStyle`
  .codex-editor {
    font-size: 16px;
  }

  @media (min-width: 651px) {
    .codex-editor--narrow .codex-editor__redactor {
      margin-right: 0;
    }
    .codex-editor--narrow .ce-toolbar__plus {
      left: -34px;
    }
    .codex-editor--narrow .ce-toolbar__actions {
      right: -24px;
    }
  }

  .ce-block--drop-target .ce-block__content {
    &:before {
      display: none;
    }
    &:after {
      display: none;
    }
  }

  .ce-block a {
    color: ${linkColor};
    margin-left: 3px;
    margin-right: 3px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #067db5;
      cursor: pointer;
    }
  }

  .ce-block--selected .ce-block__content {
    background: transparent;
    border-right: 1px solid;
    border-right-color: ${theme('button.primary')};
  }

  .ce-toolbar__actions {
    top: 8px;
    right: -24px;
  }

  .codex-editor--narrow .ce-toolbox {
    background: #052630; // ${theme('bodyBg')};
  }
  .ce-toolbar__settings-btn {
    background: ${theme('bodyBg')};

    &:hover {
      color: ${theme('thread.articleTitle')};
    }
  }
  .ce-inline-tool {
    color: ${theme('thread.articleTitle')};

    &:hover {
      background: #0e3b49; // text placeholder color
      svg {
        fill: ${mateColor};
      }
    }
  }
  .ce-inline-tool--active {
    color: ${mateColor};
  }
  .ce-inline-toolbar {
    background: #03343F;
    border: none;
  }
  .ce-settings {
    background: ${theme('popover.bg')};
    border-color: ${theme('popover.borderColor')}; 
  }
  .cdx-settings-button {
    color: ${theme('thread.articleDigest')};
    &:hover {
      background: transparent;
      svg {
        fill: ${mateColor};
      }
    }
  }
  .cdx-settings-button--active {
    color: ${mateColor};
  }
  .ce-settings__default-zone:not(:empty) {
    padding-left: 3px;
    opacity: .8;
    background: #082b35;
  }
  .ce-settings__button {
    color: ${theme('thread.articleDigest')};
    &:hover {
      background: transparent;
      svg {
        fill: ${mateColor};
      }
    }
  }

  .ce-inline-tool-input {
    border: 1px solid;
    border-color: ${theme('popover.borderColor')}; 
  }
  .ce-inline-tool-input--showed {
    background: #082b35;
    color: ${theme('thread.articleDigest')};
  }

  /* plugin-delimiter */
  .ce-delimiter .delimiter-wing {
    background-color: ${theme('thread.articleDigest')};
    opacity: 0.6;
  }
  .ce-delimiter .center-icon svg {
    fill: ${theme('thread.articleDigest')};
    opacity: 0.6;
  }
  /* plugin-delimiter end*/

  /* plugin-blockquote */
  blockquote.cdx-quote-short {
    border-left-color: ${theme('thread.articleDigest')};
    color: ${theme('thread.articleDigest')};
  }

  blockquote.cdx-quote-long { 
    border-color: #435c62;
    margin-left: 45px;
    margin-right: 25px;
    &:before {
      background: transparent;
      color: #435c62;
    }
    &:after {
      background: transparent;
      color: #435c62;
    }
  }
  .cdx-quote-caption__line {
    background: #435c62 !important;
  }
  .cdx-quote-caption__text {
    color: ${theme('thread.articleDigest')};
  }
  .cdx-quote-caption__text[contenteditable="true"]:empty:before {
    color: ${theme('thread.articleDigest')};
    opacity: .6;
  }

  /* plugin-blockquote end */

  /* plugin-alert */
  .cdx-alert .cdx-alert__title_input--warning {
    color: ${theme('baseColor.orange')};
  }
  /* plugin-alert end*/

  /* plugin-list */
  .cdx-list {
    padding: 15px 0;
  }

  .cdx-list-drag-icon {
    top: 8px;
  }

  .cdx-checklist__item-checkbox {
    border-color: ${linkColor};
  }
  .cdx-checklist__item-check-sign-active {
    background-color: ${linkColor};
  }
  .cdx-list__item-unorder-prefix::before {
    background-color: ${linkColor} !important;
  }
  .cdx-list__item-order-prefix {
    color: ${linkColor} !important;
  }

  .cdx-list-label__default {
    background: #01333e !important;
    color: #0e9bde !important;
  }
  .cdx-list-label__warn {
    background: #4a3c1f !important;
    color: #e0b76b !important;
  }
  .cdx-list-label__green {
    background: #244006 !important;
    color: #97da12 !important;
  }
  .cdx-list-label__red {
    background: #462926 !important;
    color: #f5adad !important;
  }
  .label-popover-input__default, .label-popover-input__red, .label-popover-input__warn, .label-popover-input__green {
    background: #092c35 !important;
    color: ${theme('thread.articleTitle')} !important;
  }

  .tippy-arrow {
    display: none;
  }

  .tippy-tooltip.light-theme {
    background: ${theme('popover.bg')} !important;
    border: 1px solid;
    border-color: ${theme('popover.borderColor')} !important; 
    box-shadow: none;
  }
  /* plugin-list end */

  /* .cdx-quote__text {
    min-height: 0 !important;
  }

  .cdx-input {
    border: none;
    border-left: 3px solid #00A5FA;
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
  } */
`

export default RichEditorStyle
