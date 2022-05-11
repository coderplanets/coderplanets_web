import { createGlobalStyle } from 'styled-components'
import { theme } from '@/utils/css'

const mateColor = '#30B1AC'
const linkColor = '#30B1AC'
const tableBorder = '#124a5d'

const RichEditorStyle = createGlobalStyle`
  .codex-editor {
    font-size: 16px;
    line-height: 1.8 !important;
  }

  .ce-paragraph {
    line-height: 1.875 !important;
  }

  .ce-paragraph[data-placeholder]:empty::before {
    color: #a2a2a2 !important;
  }

  .codex-editor svg {
    // vertical-align: super !important;
  }
  .ce-settings__button--delete:hover .icon {
    fill: tomato !important;
  }

  .ce-header-wrapper h1:hover::after, 
  .ce-header-wrapper h2:hover::after, 
  .ce-header-wrapper h3:hover::after, 
  .ce-header-eyebrow-title-input, 
  .ce-header-footer-title-input {
    color: ${theme('thread.articleTitle')} !important;
    opacity: 0.65 !important;
  }
  .codex-editor svg {
    fill: ${theme('thread.articleTitle')} !important;
    opacity: 0.65 !important;
  }

  .codex-editor__redactor {
    padding-bottom: 60px !important;
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
      color: ${linkColor};
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
    background: transparent;
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
        fill: ${mateColor} !important;
      }
    }
  }

  .ce-inline-tool svg.icon--link, svg.icon--unlink {
    width: 16px !important;
    height: 16px !important;
  }

  .ce-inline-tool  svg.icon--unlink {
    margin-top: -1px;
  }

  .ce-inline-tool--active {
    color: ${mateColor};
    svg {
      fill: ${mateColor} !important;
    }
  }
  .ce-inline-toolbar {
    background: white;
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
  .cdx-alert {
    filter: brightness(0.8);
    /* background: #08323e; */
    width: calc(100% - 65px);
  }

  .cdx-alert__desc_input--warning b {
    color: #F2922A !important;
    margin-left: 0;
  }

  .cdx-alert__sideicon--warning svg {
    fill: #F2922A !important;
  }
  .cdx-alert__desc_input--warning {
    color: #C6A683 !important;
  }
  .cdx-alert--warning {
    border-left-color: #F2922A !important; 
  }

  .cdx-alert__desc_input--success b {
    color: #91cc1c !important;
    margin-left: 0;
  }

  .cdx-alert__sideicon--success svg {
    fill: #7caf15 !important;
  }
  .cdx-alert__desc_input--success {
    color: #94a76e !important
  }
  .cdx-alert--success {
    border-left-color: #7caf15 !important;
  }

  .cdx-alert__desc_input--error b {
    color: #da7361 !important;
    margin-left: 0;
  }

  .cdx-alert__sideicon--error svg {
    fill: #da7361 !important;
    margin-top: -1px;
  }
  .cdx-alert__desc_input--error {
    color: #e2a89e !important;
  }
  .cdx-alert .cdx-alert__sideicon--error {
    top: 1px !important;
  }
  .cdx-alert--error {
    border-left-color: #da7361 !important;
  }
  /* plugin-alert end*/

  /* plugin-list */
  .cdx-list {
    padding: 15px 0;
  }

  .cdx-list-drag-icon {
    top: 2px !important;
    svg {
      width: 12px;
      height: 14px;
    }
  }

  .cdx-list__item-text, .cdx-checklist__item-text {
    padding: 5px 0 !important;
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
    margin-top: -2px !important;
  }

  .cdx-list__item-unorder-prefix::before {
    background-color: ${theme('thread.articleTitle')} !important;
  }
  .cdx-list__item-order-prefix {
    color: ${theme('thread.articleTitle')} !important;
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
  .tippy-tooltip.light-theme, .tippy-box[data-theme~=light]{
    /* background: ${theme('popover.bg')} !important; */
    border: 1px solid;
    border-color: ${theme('popover.borderColor')} !important; 
    box-shadow: ${theme('popover.boxShadow')} !important;
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
    border-color: ${tableBorder} !important;
  }
  .cdx-table__column_handler, .cdx-table__row_handler {
    background: #475152 !important;
  }
  .cdx-table__active_column, .cdx-table__active_row {
    background: #082d38 !important;
  }
  // column active
  .cdx-table tbody tr, .cdx-table td.cdx-table__active_column {
    /* border-left-color: ${theme('button.primary')} !important; */
    /* border-right-color: ${theme('button.primary')} !important; */
    border-top-color: ${theme('button.primary')} !important;
  }

  .cdx-table__header {
    border-bottom: 2px solid !important;
    border-bottom-color: ${tableBorder} !important;
  }

  .cdx-table__active_top[style] {
    border-top-color: ${theme('button.primary')} !important;
    /* border-left-color: ${theme('button.primary')} !important; */
    /* border-right-color: ${theme('button.primary')} !important; */
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
    /* border-top-color: ${theme('button.primary')} !important;
    border-bottom-color: ${theme('button.primary')} !important; */
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

  /* plugin-code */
  .cdx-code-content-wrapper {
    background: #002f3a !important;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #002f3a !important;
  }
  .cdx-code-lang_corner_warpper {
    background: #002f3a !important;
  }

  .cdx-code-lang_corner_warpper {
    top: 0 !important;
  }

  .cdx-code-lang_copy {
    color: ${theme('thread.articleDigest')} !important;
    display: flex;
    align-items: center;
  }

  .selectr-options-container {
    background: ${theme('popover.bg')} !important;
    box-shadow: ${theme('popover.boxShadow')} !important;
    border: 1px solid !important;
    border-color: ${theme('popover.borderColor')} !important;
  }
  .selectr-options-container:before {
    background: ${theme('popover.bg')} !important;
  }

  .selectr-input {
    background: #00262F !important;
    border-color: transparent !important;
    color: ${theme('thread.articleTitle')} !important;
  }
  .selectr-option.selected {
    background: #003E4D !important;
    color: ${mateColor} !important;
  }
  .selectr-option.active {
    background: #003E4D !important;
  }
  .cdx-code-tabs ul {
    border-bottom-color: #013b48 !important;
  }

  .cdx-code-tabs ul li label .title {
    color: ${theme('thread.articleDigest')} !important;
    opacity: 0.8;
  }
  .cdx-code-tabs ul li label.active .title {
    color: ${theme('thread.articleTitle')} !important;
  }
  .cdx-code-tabs ul li .active {
    border-bottom-color: ${theme('button.primary')} !important;
  }
  .cdx-code-tabs ul li .delete-btn svg {
    fill: ${theme('baseColor.red')} !important;
  }
  /* plugin-code end */

  /* plugin-mention */
  .cdx-mention {
    color:  #9fbabb !important;
  }
  .cdx-mention::before {
    color:  ${linkColor} !important;
  }
  .cdx-mention__input {
    background: #00262F !important;
    border-color: transparent !important;
    color: ${theme('thread.articleTitle')} !important;
  }
  .cdx-mention-suggestion__title {
    color: ${theme('thread.articleTitle')} !important;
    line-height: 16px;
  }
  .cdx-mention-suggestion__desc {
    color: ${theme('thread.articleDigest')} !important;
  }
  .cdx-mention-suggestion:hover {
    background: #003E4D !important;
  }
  /* plugin-mention end */

  /* plugin-embed */
  .embed-tool {
    /* background: ${theme('popover.bg')} !important; */
    border-color: ${theme('popover.borderColor')} !important; 
    padding-bottom: 8px;
  }

  .embed-tool__addrwrapper-inputwrapper-input {
    background: #012e38 !important;
    color: ${theme('thread.articleTitle')} !important;
    color: #889fa0 !important;
    border-radius: 10px !important;
    padding-left: 10px !important;
    border: none !important;
  }

  .embed-tool__addrwrapper-descwrapper-desc, .embed-tool__addrwrapper-descwrapper-type-title, .embed-tool__addrwrapper-descwrapper-toggler {
    color: ${theme('thread.articleTitle')} !important;
    opacity: 0.8;
  }
  
  .embed-tool__addrwrapper-descwrapper-toggler:hover {
    color: ${mateColor} !important;
  }

  .embed-tool__addrwrapper-descwrapper-iconwrapper-icon {
    filter: saturate(0.7) !important;
  }

  .embed-tool__addrwrapper-inputwrapper-btn {
    background: ${theme('button.primary')} !important;
  }

  .embed-clip svg {
    fill: ${theme('thread.articleTitle')} !important;
    opacity: 0.6 !important;
  }
  .embed-top-success {
    border-top: 3px solid !important;
    border-top-color: #134b5f !important;
  }

  .embed-tool--loading::before {
    border: 3px solid #cdd1e0;
    border-color: ${theme('thread.articleDigest')} !important;
    border-top-color: ${theme('button.primary')} !important;
  }

  /* plugin-embed end */

  /* plugin-image */
  .image-tool__image-wrapper-infolabel {
    background: #072a34 !important;
  }

  .image-tool__image-wrapper:hover {
    border-color: ${theme('button.primary')} !important;
  }
  .image-tool__image-wrapper:hover .image-tool__image-wrapper-topleft-dragger, .image-tool__image-wrapper-topright-dragger, .image-tool__image-wrapper-bottomright-dragger, .image-tool__image-wrapper-bottomleft-dragger {
    background: ${theme('button.primary')} !important;
  }

  .image-tool__caption {
    color: ${theme('thread.articleTitle')} !important;
    opacity: 0.7;
    font-size: 14px;
  }

  .image-tool__jiugongge_block, .image-tool__gallery_block, .image-tool__gallery_minimap_block {
    background-color: #013644 !important;
  }
  .image-tool__jiugongge_adder, .image-tool__gallery_block_adder {
    background: transparent !important;
    border: dashed !important;
    border-color: #004B5E !important;
    border-radius: 5px;
  }
  .image-tool__gallery_block_adder_upload svg, .image-tool__jiugongge_adder_upload svg {
    fill: #1d7696 !important;
  }
  .image-tool__gallery_block_adder_hint__icon svg, .image-tool__jiugongge_adder_hint__icon svg {
    fill: #1d7696 !important;
  }
  .image-tool__gallery_block_adder_hint__text, .image-tool__jiugongge_adder_hint__text {
    color: #1d7696 !important;
  }

  .image-tool__popover_input_wrapper_input {
    background: #092c35 !important;
    color: ${theme('thread.articleTitle')} !important;
    border: none !important;
  }
  .image-tool__popover_input_wrapper_input::placeholder {
    color: ${theme('thread.articleTitle')} !important;
    opacity: 0.6;
  }
  .image-tool__gallery_block_image {
    border-radius: 8px !important;
  }
  /* plugin-image end */

  .ce-block b {
    color: #9fbabb;
    margin-left: 1px;
    margin-right: 1px;
    /* text-shadow: 0 3px 12px #174e4c; */
  }

  .cdx-ctrlbreak-hint {
    color: ${theme('thread.articleDigest')} !important;
    opacity: .8;
  }

  /*
    .cdx-marker {
      background-color: #FCF9D8;
    }
  } */
  .ce-block--drop-target .ce-block__content{
    cursor: move !important;
    outline-style: none !important;
    border-top: 1px dashed;
    border-top-color: ${theme('button.primary')} !important;
  }
`

export default RichEditorStyle
