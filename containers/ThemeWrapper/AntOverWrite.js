import styled from 'styled-components'
import { theme } from '../../utils'

const AntOverWrite = styled.div`
  .react-calendar-heatmap rect:hover {
    stroke: #51abb2;
  }

  .react-calendar-heatmap-month-label {
    fill: #c6dbde;
    font-size: 0.7em;
  }

  .react-calendar-heatmap .color-scale-1 {
    fill: #dbe290;
  }
  .react-calendar-heatmap .color-scale-2 {
    fill: #99c06f;
  }
  .react-calendar-heatmap .color-scale-3 {
    fill: #609d4c;
  }
  .react-calendar-heatmap .color-scale-4 {
    fill: #61793e;
  }
  .react-calendar-heatmap .color-scale-5 {
    fill: #37642c;
  }
  .react-calendar-heatmap .color-empty {
    fill: #e3eeed;
  }

  .public-DraftEditor-content {
    min-height: 500px;
    font-size: 1.3em;
    color: #acadad;
  }
  .typewriter-mention {
    color: #575f67;
    cursor: pointer;
    display: inline-block;
    background: #fffddb;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
    text-decoration: none;
  }
  .typewriter-mention:hover,
  .typewriter-mention:focus {
    color: #677584;
    background: #fffddb;
    outline: 0; /* reset for :focus */
  }

  .typewriter-suggestions {
    border: 1px solid #eee;
    margin-top: 1.75em;
    position: absolute;
    min-width: 220px;
    max-width: 440px;
    background: #fff;
    border-radius: 2px;
    -webkit-box-shadow: 0px 2px 10px 1px rgba(235, 235, 235, 1);
    -moz-box-shadow: 0px 2px 10px 1px rgba(235, 235, 235, 1);
    box-shadow: 0px 2px 10px 1px rgba(235, 235, 235, 1);
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
    background-color: #cce7ff;
  }
  .typewriter-mentionSuggestionsEntryFocused {
    background-color: #e6f3ff;
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
    font-size: 1.2em;
    margin-bottom: 0.2em;
    color: #6d999d;
  }

  .typewriter-mentionSuggestionsEntryAvatar {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 12px;
  }

  // ----

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

  .fucking .ant-radio-group {
    margin-top: 50px;
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
    background-color: ${theme('pagination.item_bg')};
    border-color: ${theme('pagination.item_border_color')};
  }
  .ant-pagination-item a {
    color: #618c8b;
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
    color: ${theme('pagination.disable_text')};
  }

  .ant-pagination-item-active {
    background: ${theme('button.primary')};
    border-radius: 50%;
  }

  .ant-pagination-item-active a {
    color: white;
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

  .ant-btn-red {
    color: ${theme('button.fg')};
    background-color: tomato;
    border-color: tomato;
  }
  .ant-btn-background-ghost.ant-btn-red {
    color: tomato;
    border-color: tomato;
  }

  .ant-btn-clicked:after {
    border: ${theme('button.clicked')};
  }

  .ant-tabs-bar {
    border-bottom: ${theme('taber.baseline')};
  }
  .ant-tabs-ink-bar {
    background-color: ${theme('taber.bottom_bar')};
  }
  .ant-tabs-nav .ant-tabs-tab {
    color: ${theme('taber.normalText')};
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: ${theme('taber.activeText')};
    font-weight: bold;
  }
  ul {
    margin-bottom: 0;
  }

  .ant-tag,
  .ant-tag a,
  .ant-tag a:hover {
    color: #d2a05f;
  }
  .ant-tag {
    border: 1px solid #fff2b3;
    background: #fff2b3;
  }
`

export default AntOverWrite
