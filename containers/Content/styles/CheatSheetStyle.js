import styled from 'styled-components'
import { theme } from '../../../utils'

const CheatSheetStyle = styled.div`
  @font-face {
    font-family: octicons-link;
    src: url(data:font/woff;charset=utf-8;base64,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);
  }

  .cheatsheet-body {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
    color: ${theme('markdown.fg')};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word;
  }

  .cheatsheet-body .pl-c {
    color: #6a737d;
  }

  .cheatsheet-body .pl-c1,
  .cheatsheet-body .pl-s .pl-v {
    color: #005cc5;
  }

  .cheatsheet-body .pl-e,
  .cheatsheet-body .pl-en {
    color: #6f42c1;
  }

  .cheatsheet-body .pl-smi,
  .cheatsheet-body .pl-s .pl-s1 {
    color: #24292e;
  }

  .cheatsheet-body .pl-ent {
    color: #22863a;
  }

  .cheatsheet-body .pl-k {
    color: #d73a49;
  }

  .cheatsheet-body .pl-s,
  .cheatsheet-body .pl-pds,
  .cheatsheet-body .pl-s .pl-pse .pl-s1,
  .cheatsheet-body .pl-sr,
  .cheatsheet-body .pl-sr .pl-cce,
  .cheatsheet-body .pl-sr .pl-sre,
  .cheatsheet-body .pl-sr .pl-sra {
    color: #032f62;
  }

  .cheatsheet-body .pl-v,
  .cheatsheet-body .pl-smw {
    color: #e36209;
  }

  .cheatsheet-body .pl-bu {
    color: #b31d28;
  }

  .cheatsheet-body .pl-ii {
    color: #fafbfc;
    background-color: #b31d28;
  }

  .cheatsheet-body .pl-c2 {
    color: #fafbfc;
    background-color: #d73a49;
  }

  .cheatsheet-body .pl-c2::before {
    content: '^M';
  }

  .cheatsheet-body .pl-sr .pl-cce {
    font-weight: bold;
    color: #22863a;
  }

  .cheatsheet-body .pl-ml {
    color: #735c0f;
  }

  .cheatsheet-body .pl-mh,
  .cheatsheet-body .pl-mh .pl-en,
  .cheatsheet-body .pl-ms {
    font-weight: bold;
    color: #005cc5;
  }

  .cheatsheet-body .pl-mi {
    font-style: italic;
    color: #24292e;
  }

  .cheatsheet-body .pl-mb {
    font-weight: bold;
    color: #24292e;
  }

  .cheatsheet-body .pl-md {
    color: #b31d28;
    background-color: #ffeef0;
  }

  .cheatsheet-body .pl-mi1 {
    color: #22863a;
    background-color: #f0fff4;
  }

  .cheatsheet-body .pl-mc {
    color: #e36209;
    background-color: #ffebda;
  }

  .cheatsheet-body .pl-mi2 {
    color: #f6f8fa;
    background-color: #005cc5;
  }

  .cheatsheet-body .pl-mdr {
    font-weight: bold;
    color: #6f42c1;
  }

  .cheatsheet-body .pl-ba {
    color: #586069;
  }

  .cheatsheet-body .pl-sg {
    color: #959da5;
  }

  .cheatsheet-body .pl-corl {
    text-decoration: underline;
    color: #032f62;
  }

  .cheatsheet-body .octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
  }

  .cheatsheet-body a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  .cheatsheet-body a:active,
  .cheatsheet-body a:hover {
    outline-width: 0;
  }

  .cheatsheet-body strong {
    font-weight: inherit;
  }

  .cheatsheet-body strong {
    font-weight: normal !important;
    color: ${theme('markdown.strongFg')};
    background-color: ${theme('markdown.strongBg')};
  }

  .cheatsheet-body h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  .cheatsheet-body img {
    border-style: none;
  }

  .cheatsheet-body svg:not(:root) {
    overflow: hidden;
  }

  .cheatsheet-body code,
  .cheatsheet-body kbd,
  .cheatsheet-body pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  .cheatsheet-body hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  .cheatsheet-body * {
    box-sizing: border-box;
  }

  .cheatsheet-body a {
    color: ${theme('markdown.link')};
    text-decoration: none;
  }

  .cheatsheet-body a:hover {
    text-decoration: underline;
  }

  .cheatsheet-body strong {
    font-weight: 600;
  }

  .cheatsheet-body hr {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid #dfe2e5;
  }

  .cheatsheet-body hr::before {
    display: table;
    content: '';
  }

  .cheatsheet-body hr::after {
    display: table;
    clear: both;
    content: '';
  }

  .cheatsheet-body table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  .cheatsheet-body td,
  .cheatsheet-body th {
    padding: 0;
  }

  .cheatsheet-body h1,
  .cheatsheet-body h2,
  .cheatsheet-body h3,
  .cheatsheet-body h4,
  .cheatsheet-body h5,
  .cheatsheet-body h6 {
    margin-top: 0;
    margin-bottom: 0;
    color: ${theme('markdown.title')};
  }

  .cheatsheet-body h1 {
    font-size: 32px;
    font-weight: 600;
  }

  .cheatsheet-body h2 {
    font-size: 24px;
    font-weight: 600;
  }

  .cheatsheet-body h4 {
    font-size: 16px;
    font-weight: 600;
  }

  .cheatsheet-body h5 {
    font-size: 14px;
    font-weight: 600;
  }

  .cheatsheet-body h6 {
    font-size: 12px;
    font-weight: 600;
  }

  .cheatsheet-body p {
    margin-top: 0;
    margin-bottom: 10px;
  }

  .cheatsheet-body blockquote {
    margin: 0;
  }

  .cheatsheet-body ul,
  .cheatsheet-body ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  .cheatsheet-body ol ol,
  .cheatsheet-body ul ol {
    list-style-type: lower-roman;
  }

  .cheatsheet-body ul ul ol,
  .cheatsheet-body ul ol ol,
  .cheatsheet-body ol ul ol,
  .cheatsheet-body ol ol ol {
    list-style-type: lower-alpha;
  }

  .cheatsheet-body dd {
    margin-left: 0;
  }

  .cheatsheet-body code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    font-size: 12px;
  }

  .cheatsheet-body pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    font-size: 12px;
  }

  .cheatsheet-body .octicon {
    vertical-align: text-bottom;
  }

  .cheatsheet-body .pl-0 {
    padding-left: 0 !important;
  }

  .cheatsheet-body .pl-1 {
    padding-left: 4px !important;
  }

  .cheatsheet-body .pl-2 {
    padding-left: 8px !important;
  }

  .cheatsheet-body .pl-3 {
    padding-left: 16px !important;
  }

  .cheatsheet-body .pl-4 {
    padding-left: 24px !important;
  }

  .cheatsheet-body .pl-5 {
    padding-left: 32px !important;
  }

  .cheatsheet-body .pl-6 {
    padding-left: 40px !important;
  }

  .cheatsheet-body::before {
    display: table;
    content: '';
  }

  .cheatsheet-body::after {
    display: table;
    clear: both;
    content: '';
  }

  .cheatsheet-body > *:first-child {
    margin-top: 0 !important;
  }

  .cheatsheet-body > *:last-child {
    margin-bottom: 0 !important;
  }

  .cheatsheet-body a:not([href]) {
    color: inherit;
    text-decoration: none;
  }

  .cheatsheet-body .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1;
  }

  .cheatsheet-body .anchor:focus {
    outline: none;
  }

  .cheatsheet-body p,
  .cheatsheet-body blockquote,
  .cheatsheet-body ul,
  .cheatsheet-body ol,
  .cheatsheet-body dl,
  .cheatsheet-body table,
  .cheatsheet-body pre {
    margin-top: 0;
    margin-bottom: 16px;
  }

  .cheatsheet-body hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  .cheatsheet-body blockquote {
    padding: 0 1em;
    color: ${theme('markdown.blockquoteFg')};
    border-left: ${theme('markdown.blockquoteBorder')};
    font-style: italic;
  }

  .cheatsheet-body blockquote > :first-child {
    margin-top: 0;
  }

  .cheatsheet-body blockquote > :last-child {
    margin-bottom: 0;
  }

  .cheatsheet-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
  }

  .cheatsheet-body h1,
  .cheatsheet-body h2,
  .cheatsheet-body h3,
  .cheatsheet-body h4,
  .cheatsheet-body h5,
  .cheatsheet-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  .cheatsheet-body h3 {
    font-size: 20px;
    font-weight: 600;
    background: #0a2a35;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0.6em;
    color: #3b6e9d;
  }

  .cheatsheet-body h1 .octicon-link,
  .cheatsheet-body h2 .octicon-link,
  .cheatsheet-body h3 .octicon-link,
  .cheatsheet-body h4 .octicon-link,
  .cheatsheet-body h5 .octicon-link,
  .cheatsheet-body h6 .octicon-link {
    color: #1b1f23;
    vertical-align: middle;
    visibility: hidden;
  }

  .cheatsheet-body h1:hover .anchor,
  .cheatsheet-body h2:hover .anchor,
  .cheatsheet-body h3:hover .anchor,
  .cheatsheet-body h4:hover .anchor,
  .cheatsheet-body h5:hover .anchor,
  .cheatsheet-body h6:hover .anchor {
    text-decoration: none;
  }

  .cheatsheet-body h1:hover .anchor .octicon-link,
  .cheatsheet-body h2:hover .anchor .octicon-link,
  .cheatsheet-body h3:hover .anchor .octicon-link,
  .cheatsheet-body h4:hover .anchor .octicon-link,
  .cheatsheet-body h5:hover .anchor .octicon-link,
  .cheatsheet-body h6:hover .anchor .octicon-link {
    visibility: visible;
  }

  .cheatsheet-body h1 {
    padding-bottom: 0.3em;
    font-size: 2em;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('markdown.titleBottom')};
  }

  .cheatsheet-body h2 {
    padding-bottom: 0.3em;
    font-size: 1.5em;
    border-bottom: 1px solid;
    border-bottom-color: ${theme('markdown.titleBottom')};
  }

  .cheatsheet-body h3 {
    font-size: 1.25em;
  }

  .cheatsheet-body h4 {
    font-size: 1em;
  }

  .cheatsheet-body h5 {
    font-size: 0.875em;
  }

  .cheatsheet-body h6 {
    font-size: 0.85em;
    color: ${theme('markdown.title')};
  }

  .cheatsheet-body ul,
  .cheatsheet-body ol {
    padding-left: 1.2em !important;
  }

  .cheatsheet-body ol {
    display: block;
    list-style-type: decimal;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  .cheatsheet-body ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }

  .cheatsheet-body ul ul,
  .cheatsheet-body ul ol,
  .cheatsheet-body ol ol,
  .cheatsheet-body ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  .cheatsheet-body li > p {
    margin-top: 16px;
  }

  .cheatsheet-body li + li {
    margin-top: 0.25em;
  }

  .cheatsheet-body dl {
    padding: 0;
  }

  .cheatsheet-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: 600;
  }

  .cheatsheet-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px;
  }

  .cheatsheet-body table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  .cheatsheet-body table th {
    font-weight: 600;
  }

  .cheatsheet-body table th,
  .cheatsheet-body table td {
    padding: 6px 13px;
    border: ${theme('markdown.tableborder')};
  }

  .cheatsheet-body table tr {
    background-color: ${theme('markdown.tableBg')};
    border-top: ${theme('markdown.tableborder')};
  }

  .cheatsheet-body table tr:nth-child(2n) {
    background-color: ${theme('markdown.tableBg2n')};
  }

  .cheatsheet-body code {
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
    margin: 0;
    font-size: 85%;
    background-color: ${theme('code.bg')};
    border-radius: 3px;
  }

  .cheatsheet-body code::before,
  .cheatsheet-body code::after {
    letter-spacing: -0.2em;
    content: '\00a0';
  }

  .cheatsheet-body pre {
    word-wrap: normal;
  }

  .cheatsheet-body pre > code {
    padding: 0;
    margin: 0;
    font-size: 100%;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0;
  }

  .cheatsheet-body .highlight {
    margin-bottom: 16px;
  }

  .cheatsheet-body .highlight pre {
    margin-bottom: 0;
    word-break: normal;
  }

  .cheatsheet-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: ${theme('code.bg')};
    border-radius: 3px;
  }

  .cheatsheet-body pre code {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0;
  }

  .cheatsheet-body pre code::before,
  .cheatsheet-body pre code::after {
    content: normal;
  }

  .cheatsheet-body .full-commit .btn-outline:not(:disabled):hover {
    color: #005cc5;
    border-color: #005cc5;
  }

  .cheatsheet-body kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
      monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #d1d5da;
    border-bottom-color: #c6cbd1;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #c6cbd1;
  }

  .cheatsheet-body .task-list-item {
    list-style-type: none;
  }

  .cheatsheet-body .task-list-item + .task-list-item {
    margin-top: 3px;
  }

  .cheatsheet-body .task-list-item input {
    margin: 0 0.2em 0.25em -1.6em;
    vertical-align: middle;
  }

  .cheatsheet-body hr {
    border-bottom-color: ${theme('markdown.hrColor')};
  }

  .cheatsheet-body .task-done {
    margin-left: -1.2em;
    list-style-type: none;

    &:before {
      content: '[o]';
      color: ${theme('markdown.taskDone')};
      margin-right: 0.5em;
    }
  }

  .cheatsheet-body .task-pending {
    margin-left: -1.2em;
    list-style-type: none;

    &:before {
      content: '[-]';
      color: ${theme('markdown.taskPeding')};
      margin-right: 0.5em;
    }
  }
`

export default CheatSheetStyle

/*
   background: #0A2A35;
   margin-top: 0;
   margin-bottom: 0;
   padding-top: 10px;
   padding-bottom: 10px;
   padding-left: 0.6em;
   color: #3B6E9D;
 */
