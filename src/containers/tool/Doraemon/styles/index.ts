import styled from 'styled-components'

import type { TTestable, TActive } from '@/spec'
import css, { theme, zIndex } from '@/utils/css'

export const PageOverlay = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TActive>`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${zIndex.doraemonOverlay};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background: ${({ visible }) =>
    visible ? '#000' : 'transparent'}; // to-theme
  opacity: ${({ visible }) => (visible ? 0.5 : 0)};
`
// flex-grow example: http://zhoon.github.io/css3/2014/08/23/flex.html
export const PanelContainer = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable & TActive>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  /* box-shadow: 0px 4px 11px 8px rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1); */
  width: 45vw;
  max-width: 550px;
  position: fixed;
  top: 12vh;
  z-index: ${zIndex.doraemon};
  margin: auto;
  left: 0;
  right: 0;
  ${css.media.mobile`
    width: 80vw;
  `};

  ${css.media.tablet`
    width: 80vw;
  `};
`
// #001b21;
export const BaseBar = styled.div`
  ${css.flex('align-center')};
  border: 1px solid ${theme('shell.border')};
  width: 100%;
  height: 65px;
  background: ${theme('shell.barBg')};
  color: white;
`
