import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

import { theme } from '../../utils'

// move ant style to seperate file
const AntUIOverWrite = createGlobalStyle`
  .react-calendar-heatmap rect:hover {
    stroke: ${theme('heatmap.borderHover')};
  }

  .react-calendar-heatmap-month-label {
    fill: ${theme('heatmap.monthLabel')};
    font-size: 0.7em;
  }
  .banner-heatmap {
    .react-calendar-heatmap-month-label {
      fill: ${theme('bannerHeatmap.monthLabel')};
      font-size: 0.7em;
    }
  }

  .react-calendar-heatmap .color-scale-1 {
    fill: ${theme('heatmap.scale_1')};
  }
  .react-calendar-heatmap .color-scale-2 {
    fill: ${theme('heatmap.scale_2')};
  }
  .react-calendar-heatmap .color-scale-3 {
    fill: ${theme('heatmap.scale_3')};
  }
  .react-calendar-heatmap .color-scale-4 {
    fill: ${theme('heatmap.scale_4')};
  }
  .react-calendar-heatmap .color-scale-5 {
    fill: ${theme('heatmap.scale_5')};
  }
  .react-calendar-heatmap .color-empty {
    fill: ${theme('heatmap.empty')};
  }
  .comment-editor {
    .public-DraftEditor-content {
      min-height: 150px;
      font-size: 1rem;
      color: ${theme('editor.content')};
    }
  }
  .comment-reply-editor {
    font-size: 0.8rem;

    .public-DraftEditor-content {
      min-height: 200px;
      color: ${theme('editor.content')};
    }
  }

  .public-DraftEditor-content {
    min-height: 500px;
    font-size: 1.3em;
    color: ${theme('editor.content')};
  }

  // modal
  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.15) !important;
  }
  // alert
  .ant-alert {
    color: ${theme('alertWarn.text')};
  }
  .ant-alert-warning {
    border-color: ${theme('alertWarn.border')};
    background: ${theme('alertWarn.bg')};
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  // ----
  // popover
  .ant-popover-inner-content {
    padding: 0;
  }
  .ant-popover .ant-popover-content .ant-popover-inner {
    background: tomato;
  }

  .ant-popover-inner {
    background: tomato !important;
  }

  // popover end

  // input
  .normal-form {
    .ant-input {
      background-color: ${theme('form.inputBg')};
      color: ${theme('form.text')};
      border-color: ${theme('form.border')};
    }
    .ant-input:focus {
      border-color: ${theme('form.border')};
      border-left: 3px solid ${theme('banner.title')} !important;
      border-right: 3px solid ${theme('banner.title')} !important;
      box-shadow: 0 0 0 0 rgba(24, 144, 255, 0);
    }
    .ant-input:hover {
      box-shadow: 0 0 0 1px ${theme('form.shadow')};
    }

    input::placeholder {
      color: ${theme('form.text')};
      opacity: 0.5;
    }
    textarea::placeholder {
      color: ${theme('form.text')};
      opacity: 0.5;
    }
  }

  .ant-checkbox-wrapper {
    color: #87c5ca;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #51abb2;
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: #51abb2;
    border-color: #51abb2;
  }

  .ant-checkbox-inner {
    border-radius: 8px;
    transition: all 0.2s;
  }

  .ant-divider-horizontal.ant-divider-with-text {
    color: lightgrey;
  }

  .ant-radio-wrapper {
    color: ${theme('banner.desc')};
  }
  .ant-radio-wrapper-checked {
    color: ${theme('button.primary')};
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${theme('button.primary')};
  }

  .ant-radio-inner:after {
    background-color: ${theme('button.primary')};
  }
  .ant-radio-inner {
    border: 1px solid ${theme('form.border')};
    background: ${theme('form.inputBg')};
  }

  // pagination overides
  .ant-pagination-item:focus,
  .ant-pagination-item:hover {
    border-color: ${theme('button.primary')};
  }
  .ant-pagination-item:focus a, .ant-pagination-item:hover a {
    color: ${theme('pagination.inactiveNum')};
  }
  .ant-pagination-item {
    border-radius: 50%;
    background-color: ${theme('pagination.itemBg')};
    border-color: ${theme('pagination.itemBorderColor')};
  }
  .ant-pagination-item a {
    color: ${theme('pagination.inactiveNum')};
  }

  .ant-pagination-prev a,
  .ant-pagination-next a {
    color: ${theme('pagination.text')};
  }

  .ant-pagination-prev a:hover,
  .ant-pagination-next a:hover {
    font-weight: bold;
  }

  .ant-pagination-disabled a,
  .ant-pagination-disabled:hover a,
  .ant-pagination-disabled:focus a,
  .ant-pagination-disabled .ant-pagination-item-link,
  .ant-pagination-disabled:hover .ant-pagination-item-link,
  .ant-pagination-disabled:focus .ant-pagination-item-link {
    color: ${theme('pagination.disableText')};
  }

  .ant-pagination-item-active {
    background: ${theme('button.primary')};
    border-radius: 50%;
  }
  .ant-pagination-item-active a {
    color: ${theme('pagination.activeNum')};
    font-size: 1.1em;
  }
  // pagination end

  .ant-btn-background-ghost.ant-btn-primary {
    color: ${theme('button.primary')};
    border-color: ${theme('button.primary')};
  }

  .ant-btn:focus,
  .ant-btn:hover {
    background-color: ${theme('button.hoverBg')};
  }
  .ant-btn:active {
    color: ${theme('button.fg')} !important;
    background-color: ${theme('button.activeBg')};
  }
  .ant-btn-background-ghost.ant-btn-primary.hover,
  .ant-btn-background-ghost.ant-btn-primary:hover {
    color: ${theme('button.hoverBg')};
    border-color: ${theme('button.hoverBg')};
  }
  .ant-btn-background-ghost.ant-btn-primary:focus,
  .ant-btn-background-ghost.ant-btn-primary:hover {
    color: ${theme('button.hoverBg')};
    border-color: ${theme('button.hoverBg')};
  }
  .ant-btn-background-ghost.ant-btn-primary.active,
  .ant-btn-background-ghost.ant-btn-primary:active {
    color: ${theme('button.primary')};
    border-color: ${theme('button.hoverBg')};
  }

  .ant-btn-primary {
    color: ${theme('button.fg')};
    background-color: ${theme('button.primary')};
    border-color: ${theme('button.primary')};
  }
  .ant-btn-primary:active, .ant-btn-primary.active {
    border-color: ${theme('button.primary')};
   }
  .ant-btn-primary:focus, .ant-btn-primary:hover {
    border-color: ${theme('button.primary')};
  }
  .ant-btn-primary.disabled,
  .ant-btn-primary[disabled],
  .ant-btn-primary.disabled:hover,
  .ant-btn-primary[disabled]:hover,
  .ant-btn-primary.disabled:focus,
  .ant-btn-primary[disabled]:focus,
  .ant-btn-primary.disabled:active,
  .ant-btn-primary[disabled]:active,
  .ant-btn-primary.disabled.active,
  .ant-btn-primary[disabled].active {
    color: white;
  }

  .ant-btn-red:hover {
    background-color: ${lighten(0.1, 'tomato')};
    border-color: ${lighten(0.1, 'tomato')};
    color: white;
  }

  .ant-btn-red:active {
    background-color: ${lighten(0.1, 'tomato')};
    border-color: ${lighten(0.1, 'tomato')};
  }
  .ant-btn-red:focus {
    background-color: ${lighten(0.2, 'tomato')};
    border-color: ${lighten(0.2, 'tomato')};
  }

  .ant-btn-red {
    color: white;
    background-color: tomato;
    border-color: tomato;
  }
  .ant-btn-background-ghost.ant-btn-red {
    color: tomato;
    border-color: tomato;
  }

  .ant-btn-clicked:after {
    border: 0px solid;
    border-color: ${theme('button.clicked')};
  }

  .ant-tabs-bar {
    border-bottom: ${theme('tabs.headerActive')};
  }
  .tabs-with-bottom {
    .ant-tabs-nav-container {
      border-bottom: 1px solid;
      border-bottom-color: ${theme('tabs.bottomLine')};
    }
  }
  .ant-tabs-ink-bar {
    background-color: ${theme('tabs.headerActive')};
  }
  .ant-tabs-nav .ant-tabs-tab {
    color: ${theme('tabs.header')};
    &:hover {
      color: ${theme('tabs.headerActive')};
    }
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${theme('tabs.headerActive')};
    font-weight: bold;
  }
  .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
    border-color: ${theme('tabs.border')};
    background: ${theme('tabs.headerBg')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('tabs.border')};
  }

  .ant-tabs.ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active {
    border-top: 2px solid;
    border-top-color: ${theme('tabs.headerActiveTop')};
    color: ${theme('tabs.header')};
    background: ${theme('tabs.contentBg')};
    font-weight: bold;
  }

  // tabs end

  ul {
    margin-bottom: 0;
  }

  .ant-tag,
  .ant-tag a,
  .ant-tag a:hover {
    color: ${theme('tagger.text')};
  }
  .ant-tag {
    border: 1px solid;
    border-color: ${theme('tagger.border')};
    background: ${theme('tagger.bg')};
  }
  .ant-tag .anticon-cross {
    color: ${theme('tagger.closeBtn')};
  }
  // table
  .ant-table-small > .ant-table-content > .ant-table-header > table, .ant-table-small > .ant-table-content > .ant-table-body > table, .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table, .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table, .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table, .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table, .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table, .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table {
    padding: 0;
  }
  .ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th, .ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th {
    background: ${theme('table.headerBg')};
    border-bottom: 1px solid;
    border-bottom-color: ${theme('table.border')};
  }
  .ant-table {
    color: ${theme('table.text')};
  }
  .ant-table-tbody > tr > td {
    border-top: 1px solid;
    border-color: ${theme('table.border')};
    transition: none;
  }
  .ant-table-small > .ant-table-content .ant-table-placeholder, .ant-table-small > .ant-table-content .ant-table-row:last-child td {
    border-bottom: 1px solid;
    border-bottom-color: ${theme('table.border')};
  }
  .ant-table-small {
    border: 1px solid;
    border-color: ${theme('table.border')};
  }
  .ant-table-thead > tr > th {
    color: ${theme('table.headTitle')};
  }
  .ant-table-thead > tr.ant-table-row-hover > td, .ant-table-tbody > tr.ant-table-row-hover > td, .ant-table-thead > tr:hover > td, .ant-table-tbody > tr:hover > td {
   background: ${theme('table.hoverBg')};
  }
  .ant-table-placeholder {
    background: ${theme('table.headerBg')};
    color: ${theme('table.text')};
    opacity: 0.6;
  }
`

export default AntUIOverWrite
