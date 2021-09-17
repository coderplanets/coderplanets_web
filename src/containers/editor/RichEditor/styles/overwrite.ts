import { createGlobalStyle } from 'styled-components'
import { theme } from '@/utils/themes'

const mateColor = '#30B1AC'
const linkColor = '#2ba8e2'

const RichEditorStyle = createGlobalStyle`
  .codex-editor {
    font-size: 16px;
    line-height: 1.8 !important;
  }

  .ce-paragraph {
    line-height: 1.875 !important;
  }

  .codex-editor svg {
    vertical-align: super !important;
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
    top: 8px !important;
    svg {
      width: 12px;
      height: 14px;
    }
  }

  .cdx-checklist__item-checkbox {
    border-color: ${theme('button.primary')} !important;
  }

  .cdx-checklist__item-checkbox {
    border-color: ${linkColor};
  }
  .cdx-checklist__item-check-sign-active {
    background: ${theme('button.primary')} !important;
  }

  .cdx-checklist__item-check-sign svg {
    margin-left: -1px;
    margin-top: 0;
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

  .cdx-list-drag-over {
    border-bottom-color: ${theme('thread.articleDigest')} !important;
  }

  .cdx-list-drag-start {
      opacity: 0.6;
      border-bottom-color: ${theme('thread.articleDigest')} !important;
  }
  /* plugin-list end */

  /* plugin-table */
  .cdx-table tbody tr th, .cdx-table td {
    border: 1px solid;
    border-color: #475152 !important;
  }
  .cdx-table__column_handler, .cdx-table__row_handler {
    background: #475152 !important;
  }
  .cdx-table__active_column, .cdx-table__active_row {
    background: #082d38 !important;
  }
  // column active
  .cdx-table tbody tr, .cdx-table td.cdx-table__active_column {
    border-left-color: ${theme('button.primary')} !important;
    border-right-color: ${theme('button.primary')} !important;
    border-top-color: ${theme('button.primary')} !important;
  }

  .cdx-table__header {
    border-bottom: 2px solid !important;
    border-bottom-color: #082d38 !important;
  }

  .cdx-table__header .cdx-table__active_column .cdx-table__active_top {
    border-top-color: ${theme('button.primary')} !important;
  }

  .cdx-table tbody tr, .cdx-table td.cdx-table__active_top {
    border-top-color: ${theme('button.primary')} !important;
  } 
  .cdx-table tbody tr , .cdx-table td.cdx-table__active_bottom {
    border-bottom-color: ${theme('button.primary')} !important;
  }

  // row active
  .cdx-table tbody tr , .cdx-table td.cdx-table__active_row {
    border-top-color: ${theme('button.primary')} !important;
    border-bottom-color: ${theme('button.primary')} !important;
  }

  .cdx-table tbody tr, .cdx-table td.cdx-table__active_left {
    border-left-color: ${theme('button.primary')} !important;
  } 
  .cdx-table tbody tr, .cdx-table td.cdx-table__active_right {
    border-right-color: ${theme('button.primary')} !important;
  }

  .cdx-table__td_stripe {
    background: #002A33 !important;
  }

  .cdx-table__column_action_icon svg {
    fill: ${theme('button.primary')} !important;
  }
  /* plugin-table end */

  /* plugin-collapse */
  .cdx-collapse-toggle {
    margin-top: -3px;
  }
  .cdx-collapse-toggle-checked {
    margin-top: 2px;
  }
  .cdx-collapse-title {
    color: ${theme('thread.articleTitle')};
  }
  .cdx-collapse-content .content-inner {
    border-left-color: #4a666b !important;
    margin-left: 6px !important;
  }

  .cdx-collapse-content .content-inner[placeholder]:empty:before {
    color: ${theme('thread.articleDigest')} !important;
    opacity: .8;
  }

  /* plugin-collapse end */

  /* plugin-inline-code */
  .cdx-inline-code {
    background: #013340 !important;
    color: #8cb147 !important;
    font-size: 15px !important;
    border-radius: 3px !important;
    margin: 0 2px;
  }
  /* plugin-inline-code end */


  .ce-block b {
    color: #9fbabb !important;
    margin-left: 1px;
    margin-right: 1px;
    /* text-shadow: 0 3px 12px #174e4c; */
  }

  /*
    .cdx-marker {
      background-color: #FCF9D8;
    }
  } */
`

export default RichEditorStyle
