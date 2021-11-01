import { createGlobalStyle } from 'styled-components'

/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */

/*
OVERLAY SCROLLBARS CORE:
*/

const ScrollBarStyle = createGlobalStyle`
  html.os-html,
  html.os-html > .os-host {
    display: block;
    overflow: hidden;
    box-sizing: border-box;
    height: 100% !important;
    width: 100% !important;
    min-width: 100% !important;
    min-height: 100% !important;
    margin: 0 !important;
    position: absolute !important; /* could be position: fixed; but it causes issues on iOS (-webkit-overflow-scrolling: touch) */
  }
  html.os-html > .os-host > .os-padding {
    position: absolute; /* could be position: fixed; but it causes issues on iOS (-webkit-overflow-scrolling: touch) */
  }
  body.os-dragging,
  body.os-dragging * {
    cursor: default;
  }
  .os-host,
  .os-host-textarea {
    position: relative;
    overflow: visible !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    -ms-grid-row-align: flex-start;
    align-items: flex-start;
  }
  .os-host-flexbox {
    overflow: hidden !important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .os-host-flexbox > .os-size-auto-observer {
    height: inherit !important;
  }
  .os-host-flexbox > .os-content-glue {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }
  .os-host-flexbox > .os-size-auto-observer,
  .os-host-flexbox > .os-content-glue {
    min-height: 0;
    min-width: 0;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  #os-dummy-scrollbar-size {
    position: fixed;
    opacity: 0;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    visibility: hidden;
    overflow: scroll;
    height: 500px;
    width: 500px;
  }
  #os-dummy-scrollbar-size > div {
    width: 200%;
    height: 200%;
    margin: 10px 0;
  }
  /* fix restricted measuring */
  #os-dummy-scrollbar-size:before,
  #os-dummy-scrollbar-size:after,
  .os-content:before,
  .os-content:after {
    content: '';
    display: table;
    width: 0.01px;
    height: 0.01px;
    line-height: 0;
    font-size: 0;
    flex-grow: 0;
    flex-shrink: 0;
    visibility: hidden;
  }
  #os-dummy-scrollbar-size,
  .os-viewport {
    -ms-overflow-style: scrollbar !important;
  }
  .os-viewport-native-scrollbars-invisible#os-dummy-scrollbar-size,
  .os-viewport-native-scrollbars-invisible.os-viewport {
    scrollbar-width: none !important;
  }
  .os-viewport-native-scrollbars-invisible#os-dummy-scrollbar-size::-webkit-scrollbar,
  .os-viewport-native-scrollbars-invisible.os-viewport::-webkit-scrollbar,
  .os-viewport-native-scrollbars-invisible#os-dummy-scrollbar-size::-webkit-scrollbar-corner,
  .os-viewport-native-scrollbars-invisible.os-viewport::-webkit-scrollbar-corner {
    display: none !important;
    width: 0px !important;
    height: 0px !important;
    visibility: hidden !important;
    background: transparent !important;
  }
  .os-content-glue {
    box-sizing: inherit;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    pointer-events: none;
  }
  .os-padding {
    box-sizing: inherit;
    direction: inherit;
    position: absolute;
    overflow: visible;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: auto !important;
    height: auto !important;
    z-index: 0;
  }
  .os-host-overflow > .os-padding {
    overflow: hidden;
  }
  .os-viewport {
    direction: inherit !important;
    box-sizing: inherit !important;
    resize: none !important;
    outline: none !important;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0;
    margin: 0;
    -webkit-overflow-scrolling: touch;
  }
  .os-content-arrange {
    position: absolute;
    z-index: -1;
    min-height: 1px;
    min-width: 1px;
    pointer-events: none;
  }
  .os-content {
    direction: inherit;
    box-sizing: border-box !important;
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    height: 100%;
    width: 100%;
    visibility: visible;
  }
  .os-content > .os-textarea {
    box-sizing: border-box !important;
    direction: inherit !important;
    background: transparent !important;
    outline: 0px none transparent !important;
    overflow: hidden !important;
    position: absolute !important;
    display: block !important;
    top: 0 !important;
    left: 0 !important;
    margin: 0 !important;
    border-radius: 0px !important;
    float: none !important;
    -webkit-filter: none !important;
    filter: none !important;
    border: none !important;
    resize: none !important;
    -webkit-transform: none !important;
    transform: none !important;
    max-width: none !important;
    max-height: none !important;
    box-shadow: none !important;
    -webkit-perspective: none !important;
    perspective: none !important;
    opacity: 1 !important;
    z-index: 1 !important;
    clip: auto !important;
    vertical-align: baseline !important;
    padding: 0px;
  }
  .os-host-rtl > .os-padding > .os-viewport > .os-content > .os-textarea {
    right: 0 !important;
  }
  .os-content > .os-textarea-cover {
    z-index: -1;
    pointer-events: none;
  }
  .os-content > .os-textarea[wrap='off'] {
    white-space: pre !important;
    margin: 0px !important;
  }
  .os-text-inherit {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-variant: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    text-indent: inherit;
    text-align: inherit;
    text-shadow: inherit;
    text-overflow: inherit;
    letter-spacing: inherit;
    word-spacing: inherit;
    line-height: inherit;
    unicode-bidi: inherit;
    direction: inherit;
    color: inherit;
    cursor: text;
  }
  .os-resize-observer,
  .os-resize-observer-host {
    box-sizing: inherit;
    display: block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
  }
  .os-resize-observer-host {
    padding: inherit;
    border: inherit;
    border-color: transparent;
    border-style: solid;
    box-sizing: border-box;
  }
  .os-resize-observer-host.observed {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .os-resize-observer-host > .os-resize-observer,
  .os-resize-observer-host.observed > .os-resize-observer {
    height: 200%;
    width: 200%;
    padding: inherit;
    border: inherit;
    margin: 0;
    display: block;
    box-sizing: content-box;
  }
  .os-resize-observer-host.observed > .os-resize-observer,
  .os-resize-observer-host.observed > .os-resize-observer:before {
    display: flex;
    position: relative;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    box-sizing: border-box;
  }
  .os-resize-observer-host.observed > .os-resize-observer:before {
    content: '';
    box-sizing: content-box;
    padding: inherit;
    border: inherit;
    margin: 0;
  }
  .os-size-auto-observer {
    box-sizing: inherit !important;
    height: 100%;
    width: inherit;
    max-width: 1px;
    position: relative;
    float: left;
    max-height: 1px;
    overflow: hidden;
    z-index: -1;
    padding: 0;
    margin: 0;
    pointer-events: none;
    -webkit-box-flex: inherit;
    -ms-flex-positive: inherit;
    flex-grow: inherit;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
  }
  .os-size-auto-observer > .os-resize-observer {
    width: 1000%;
    height: 1000%;
    min-height: 1px;
    min-width: 1px;
  }
  .os-resize-observer-item {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    opacity: 0;
    direction: ltr !important;
    -webkit-box-flex: 0 !important;
    -ms-flex: none !important;
    flex: none !important;
  }
  .os-resize-observer-item-final {
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: none !important;
    transition: none !important;
    -webkit-box-flex: 0 !important;
    -ms-flex: none !important;
    flex: none !important;
  }
  .os-resize-observer {
    -webkit-animation-duration: 0.001s;
    animation-duration: 0.001s;
    -webkit-animation-name: os-resize-observer-dummy-animation;
    animation-name: os-resize-observer-dummy-animation;
  }
  object.os-resize-observer {
    box-sizing: border-box !important;
  }
  @-webkit-keyframes os-resize-observer-dummy-animation {
    from {
      z-index: 0;
    }
    to {
      z-index: -1;
    }
  }
  @keyframes os-resize-observer-dummy-animation {
    from {
      z-index: 0;
    }
    to {
      z-index: -1;
    }
  }

  /*
  CUSTOM SCROLLBARS AND CORNER CORE:
  */

  .os-host-transition > .os-scrollbar,
  .os-host-transition > .os-scrollbar-corner {
    -webkit-transition: opacity 0.3s, visibility 0.3s, top 0.3s, right 0.3s,
      bottom 0.3s, left 0.3s;
    transition: opacity 0.3s, visibility 0.3s, top 0.3s, right 0.3s, bottom 0.3s,
      left 0.3s;
  }
  html.os-html > .os-host > .os-scrollbar {
    position: absolute; /* could be position: fixed; but it causes issues on iOS (-webkit-overflow-scrolling: touch) */
    z-index: 999999; /* highest z-index of the page */
  }
  .os-scrollbar,
  .os-scrollbar-corner {
    position: absolute;
    opacity: 1;
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
    z-index: 1;
  }
  .os-scrollbar-corner {
    bottom: 0;
    right: 0;
  }
  .os-scrollbar {
    pointer-events: none;
  }
  .os-scrollbar-track {
    pointer-events: auto;
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0 !important;
    border: none !important;
  }
  .os-scrollbar-handle {
    pointer-events: auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .os-scrollbar-handle-off,
  .os-scrollbar-track-off {
    pointer-events: none;
  }
  .os-scrollbar.os-scrollbar-unusable,
  .os-scrollbar.os-scrollbar-unusable * {
    pointer-events: none !important;
  }
  .os-scrollbar.os-scrollbar-unusable .os-scrollbar-handle {
    opacity: 0 !important;
  }
  .os-scrollbar-horizontal {
    bottom: 0;
    left: 0;
  }
  .os-scrollbar-vertical {
    top: 0;
    right: 0;
  }
  .os-host-rtl > .os-scrollbar-horizontal {
    right: 0;
  }
  .os-host-rtl > .os-scrollbar-vertical {
    right: auto;
    left: 0;
  }
  .os-host-rtl > .os-scrollbar-corner {
    right: auto;
    left: 0;
  }
  .os-scrollbar-auto-hidden,
  .os-padding + .os-scrollbar-corner,
  .os-host-resize-disabled.os-host-scrollbar-horizontal-hidden
    > .os-scrollbar-corner,
  .os-host-scrollbar-horizontal-hidden > .os-scrollbar-horizontal,
  .os-host-resize-disabled.os-host-scrollbar-vertical-hidden
    > .os-scrollbar-corner,
  .os-host-scrollbar-vertical-hidden > .os-scrollbar-vertical,
  .os-scrollbar-horizontal.os-scrollbar-auto-hidden
    + .os-scrollbar-vertical
    + .os-scrollbar-corner,
  .os-scrollbar-horizontal
    + .os-scrollbar-vertical.os-scrollbar-auto-hidden
    + .os-scrollbar-corner,
  .os-scrollbar-horizontal.os-scrollbar-auto-hidden
    + .os-scrollbar-vertical.os-scrollbar-auto-hidden
    + .os-scrollbar-corner {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .os-scrollbar-corner-resize-both {
    cursor: nwse-resize;
  }
  .os-host-rtl > .os-scrollbar-corner-resize-both {
    cursor: nesw-resize;
  }
  .os-scrollbar-corner-resize-horizontal {
    cursor: ew-resize;
  }
  .os-scrollbar-corner-resize-vertical {
    cursor: ns-resize;
  }
  .os-dragging .os-scrollbar-corner.os-scrollbar-corner-resize {
    cursor: default;
  }
  .os-host-resize-disabled.os-host-scrollbar-horizontal-hidden
    > .os-scrollbar-vertical {
    top: 0;
    bottom: 0;
  }
  .os-host-resize-disabled.os-host-scrollbar-vertical-hidden
    > .os-scrollbar-horizontal,
  .os-host-rtl.os-host-resize-disabled.os-host-scrollbar-vertical-hidden
    > .os-scrollbar-horizontal {
    right: 0;
    left: 0;
  }
  .os-scrollbar:hover,
  .os-scrollbar-corner.os-scrollbar-corner-resize {
    opacity: 1 !important;
    visibility: visible !important;
  }

  .os-host-rtl > .os-scrollbar-corner.os-scrollbar-corner-resize {
    -webkit-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }
  .os-host-overflow {
    overflow: hidden !important;
  }
  .os-host-overflow-x {
  }
  .os-host-overflow-y {
  }

  /*
  THEMES:
  */

  /* NONE THEME: */
  .os-theme-none > .os-scrollbar-horizontal,
  .os-theme-none > .os-scrollbar-vertical,
  .os-theme-none > .os-scrollbar-corner {
    display: none !important;
  }
  .os-theme-none > .os-scrollbar-corner-resize {
    display: block !important;
    min-width: 10px;
    min-height: 10px;
  }
  /* DARK & LIGHT THEME: */
  .os-theme-dark > .os-scrollbar-horizontal,
  .os-theme-light > .os-scrollbar-horizontal {
    right: 10px;
    height: 10px;
  }
  .os-theme-dark > .os-scrollbar-vertical,
  .os-theme-light > .os-scrollbar-vertical {
    bottom: 10px;
    width: 10px;
  }
  .os-theme-dark.os-host-rtl > .os-scrollbar-horizontal,
  .os-theme-light.os-host-rtl > .os-scrollbar-horizontal {
    left: 10px;
    right: 0;
  }
  .os-theme-dark > .os-scrollbar-corner,
  .os-theme-light > .os-scrollbar-corner {
    height: 10px;
    width: 10px;
  }
  .os-theme-dark > .os-scrollbar-corner,
  .os-theme-light > .os-scrollbar-corner {
    background-color: transparent;
  }
  .os-theme-dark > .os-scrollbar,
  .os-theme-light > .os-scrollbar {
    padding: 2px;
    box-sizing: border-box;
    background: transparent;
  }
  .os-theme-dark > .os-scrollbar.os-scrollbar-unusable,
  .os-theme-light > .os-scrollbar.os-scrollbar-unusable {
    background: transparent;
  }
  .os-theme-dark > .os-scrollbar > .os-scrollbar-track,
  .os-theme-light > .os-scrollbar > .os-scrollbar-track {
    background: transparent;
  }
  .os-theme-dark
    > .os-scrollbar-horizontal
    > .os-scrollbar-track
    > .os-scrollbar-handle,
  .os-theme-light
    > .os-scrollbar-horizontal
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    min-width: 30px;
  }
  .os-theme-dark
    > .os-scrollbar-vertical
    > .os-scrollbar-track
    > .os-scrollbar-handle,
  .os-theme-light
    > .os-scrollbar-vertical
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    min-height: 30px;
  }
  .os-theme-dark.os-host-transition
    > .os-scrollbar
    > .os-scrollbar-track
    > .os-scrollbar-handle,
  .os-theme-light.os-host-transition
    > .os-scrollbar
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
  .os-theme-dark > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle,
  .os-theme-light > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle,
  .os-theme-dark > .os-scrollbar > .os-scrollbar-track,
  .os-theme-light > .os-scrollbar > .os-scrollbar-track {
    border-radius: 10px;
  }
  .os-theme-dark > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle {
    background: rgba(0, 0, 0, 0.4);
  }
  .os-theme-light > .os-scrollbar > .os-scrollbar-track > .os-scrollbar-handle {
    background: rgba(255, 255, 255, 0.4);
  }
  .os-theme-dark
    > .os-scrollbar:hover
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    background: rgba(0, 0, 0, 0.55);
  }
  .os-theme-light
    > .os-scrollbar:hover
    > .os-scrollbar-track
    > .os-scrollbar-handle {
    background: rgba(255, 255, 255, 0.55);
  }
  .os-theme-dark
    > .os-scrollbar
    > .os-scrollbar-track
    > .os-scrollbar-handle.active {
    background: rgba(0, 0, 0, 0.7);
  }
  .os-theme-light
    > .os-scrollbar
    > .os-scrollbar-track
    > .os-scrollbar-handle.active {
    background: rgba(255, 255, 255, 0.7);
  }
  .os-theme-dark > .os-scrollbar-horizontal .os-scrollbar-handle:before,
  .os-theme-dark > .os-scrollbar-vertical .os-scrollbar-handle:before,
  .os-theme-light > .os-scrollbar-horizontal .os-scrollbar-handle:before,
  .os-theme-light > .os-scrollbar-vertical .os-scrollbar-handle:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;
  }
  .os-theme-dark.os-host-scrollbar-horizontal-hidden
    > .os-scrollbar-horizontal
    .os-scrollbar-handle:before,
  .os-theme-dark.os-host-scrollbar-vertical-hidden
    > .os-scrollbar-vertical
    .os-scrollbar-handle:before,
  .os-theme-light.os-host-scrollbar-horizontal-hidden
    > .os-scrollbar-horizontal
    .os-scrollbar-handle:before,
  .os-theme-light.os-host-scrollbar-vertical-hidden
    > .os-scrollbar-vertical
    .os-scrollbar-handle:before {
    display: none;
  }
  .os-theme-dark > .os-scrollbar-horizontal .os-scrollbar-handle:before,
  .os-theme-light > .os-scrollbar-horizontal .os-scrollbar-handle:before {
    top: -6px;
    bottom: -2px;
  }
  .os-theme-dark > .os-scrollbar-vertical .os-scrollbar-handle:before,
  .os-theme-light > .os-scrollbar-vertical .os-scrollbar-handle:before {
    left: -6px;
    right: -2px;
  }
  .os-host-rtl.os-theme-dark > .os-scrollbar-vertical .os-scrollbar-handle:before,
  .os-host-rtl.os-theme-light
    > .os-scrollbar-vertical
    .os-scrollbar-handle:before {
    right: -6px;
    left: -2px;
  }
`
export default ScrollBarStyle
