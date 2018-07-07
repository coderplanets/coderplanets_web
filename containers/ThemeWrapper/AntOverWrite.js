import styled from 'styled-components'
import { lighten } from 'polished'

import { theme } from '../../utils'

const AntOverWrite = styled.div`
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
      font-size: 1.3em;
      color: ${theme('editor.content')};
    }
  }
  .comment-reply-editor {
    .public-DraftEditor-content {
      min-height: 200px;
      font-size: 0.9em;
      color: ${theme('editor.content')};
    }
  }

  .public-DraftEditor-content {
    min-height: 500px;
    font-size: 1.3em;
    color: ${theme('editor.content')};
  }

  // mentions
  .typewriter-mention {
    color: ${theme('comment.mentionText')};
    cursor: pointer;
    display: inline-block;
    background: ${theme('comment.mentionTextBg')};
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 3px;
    text-decoration: none;
  }
  .typewriter-mention:hover,
  .typewriter-mention:focus {
    color: #677584;
    background: ${theme('comment.mentionActiveBg')};
    outline: 0; /* reset for :focus */
  }

  .typewriter-suggestions {
    border: 1px solid;
    border-color: ${theme('comment.mentionBorder')};
    margin-top: 10px;
    position: absolute;
    min-width: 220px;
    max-width: 440px;
    background: ${theme('comment.mentionBg')};
    border-radius: 2px;
    box-shadow: ${theme('comment.mentionShadow')};
    cursor: pointer;
    padding-top: 8px;
    padding-bottom: 8px;
    z-index: 2;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    box-sizing: border-box;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  .typewriter-mentionSuggestionsEntry {
    transition: background-color 0.4s cubic-bezier(0.27, 1.27, 0.48, 0.56);
    padding: 7px 10px 3px 10px;
    padding-left: 10px;
    display: flex;
  }
  .typewriter-mentionSuggestionsEntry:active {
    background-color: tomato;
  }
  .typewriter-mentionSuggestionsEntryFocused {
    background-color: ${theme('comment.mentionActiveBg')};
    padding: 7px 10px 3px 10px;
    display: flex;
  }

  .typewriter-mentionSuggestionsEntryText {
    display: inline-block;
    margin-left: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 368px;
    font-size: 1.1rem;
    margin-bottom: 0.2em;
    color: #6d999d;
  }

  .typewriter-mentionSuggestionsEntryAvatar {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  // modal
  .ant-modal-mask {
    background-color: rgba(0, 0, 0, 0.15) !important;
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
    color: grey;
  }
  .ant-radio-wrapper-checked {
    color: ${theme('button.primary')};
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${theme('button.primary')} !important;
    margin-top: 50px;
  }

  .ant-radio-inner:after {
    background-color: ${theme('button.primary')} !important;
  }

  // pagination overides
  .ant-pagination-item:focus,
  .ant-pagination-item:hover {
    border-color: ${theme('button.primary')};
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
    background-color: ${theme('button.activeBg')};
  }

  .ant-btn-primary {
    color: ${theme('button.fg')};
    background-color: ${theme('button.primary')};
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
  .ant-tabs-nav-container {
    border-bottom: 1px solid;
    border-bottom-color: ${theme('banner.bg')};
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
`

export default AntOverWrite
