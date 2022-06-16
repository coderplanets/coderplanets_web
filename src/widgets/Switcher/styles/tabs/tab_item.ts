import styled from 'styled-components'

import type { TSizeSM, TActive } from '@/spec'
import css, { theme } from '@/utils/css'

import { getMarginRight, getPadding, getMarginBottom } from '../metric/tabs'

type TTab = {
  size: TSizeSM
  mobileView: boolean
  holyGrailView: boolean
  wrapMode: boolean
  modelineView: boolean
} & TActive

export const Wrapper = styled.div<TTab>`
  ${css.flex('justify-center')};
  color: ${theme('thread.articleTitle')};
  position: relative;
  height: 100%;
  z-index: 1;
  margin-right: ${({ size, mobileView, holyGrailView }) =>
    getMarginRight(size, mobileView, holyGrailView)};
  padding: ${({ size, holyGrailView, mobileView, wrapMode, modelineView }) =>
    getPadding(size, holyGrailView, mobileView, wrapMode, modelineView)};
  text-align: center;
  min-width: auto;
  cursor: pointer;

  margin-bottom: ${({ holyGrailView, wrapMode }) =>
    getMarginBottom(holyGrailView, wrapMode)};

  /* background: ${({ active }) => (active ? '#114758' : '')}; */

  ${css.media.mobile`
    margin-right: ${() => getMarginRight('', true, false)};
  `};

  transition: all 0.2s;
`
export const ActiveLineWrapper = styled.div`
  position: absolute;
  bottom: 0;
  ${css.flex('align-center')};
  width: 100%;
`
export const ActiveLine = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  border-bottom: 3px solid;
  border-bottom-color: ${theme('tabs.headerActive')};
  border-radius: 3px;
`
export const Nav = styled.nav`
  position: relative;
  ${css.flex('align-center')};
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
`

type TLabel = TActive & {
  size: TSizeSM
  bottomSpace: number
}
export const Label = styled.span<TLabel>`
  ${css.flex('align-center')};
  white-space: nowrap;
  color: ${({ active }) =>
    active ? theme('thread.articleTitle') : '#878b8f'}; // to-theme
  margin-bottom: ${({ bottomSpace }) => `${bottomSpace}px`};

  font-weight: 500;

  &:hover {
    color: ${theme('thread.articleTitle')};
    svg {
      fill: ${theme('thread.articleTitle')};
    }
  }
`
