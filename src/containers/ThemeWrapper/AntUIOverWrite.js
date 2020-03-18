import { createGlobalStyle } from 'styled-components'

import { theme, cs } from '@utils'

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

  .ant-radio-wrapper:hover .ant-radio .ant-radio-inner,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-focused .ant-radio-inner {
    border-color: ${theme('button.primary')};
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

  .ant-tabs-bar {
    border-bottom: ${theme('tabs.headerActive')};
  }
  .ant-tabs {
    width: 100%;
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

  .ant-popover {
    z-index: ${cs.zIndex.popover};
  }
  .ant-popover-inner {
    background-color: ${theme('popover.bg')} !important;
    border: 1px solid;
    border-color: ${theme('popover.borderColor')} !important;
    z-index: ${cs.zIndex.popover};
    box-shadow: ${theme('popover.boxShadow')}; 
  }
  .ant-popover-arrow {
    background-color: ${theme('popover.borderColor')} !important;
    border-radius: 3px;
    z-index: ${cs.zIndex.popover - 1};
  }
  .ant-popover-inner-content {
    padding: 0;
  }
`

export default AntUIOverWrite
