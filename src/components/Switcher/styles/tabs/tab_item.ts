import styled from 'styled-components'

import type { TActive } from '@/spec'
import { css, theme } from '@/utils'

import { getMarginRight, getPadding, getMarginBottom } from '../metric/tabs'

type TTab = {
  size: string
  mobileView: boolean
  cardView: boolean
  wrapMode: boolean
  modelineView: boolean
} & TActive

export const Wrapper = styled.div<TTab>`
  ${css.flex('justify-center')};
  color: ${theme('thread.articleTitle')};
  position: relative;
  height: 100%;
  z-index: 1;
  margin-right: ${({ size, mobileView, cardView }) =>
    getMarginRight(size, mobileView, cardView)};
  padding: ${({ size, cardView, mobileView, wrapMode, modelineView }) =>
    getPadding(size, cardView, mobileView, wrapMode, modelineView)};
  text-align: center;
  min-width: ${({ cardView }) => (!cardView ? 'auto' : '33%')};
  cursor: pointer;

  margin-bottom: ${({ cardView, wrapMode }) =>
    getMarginBottom(cardView, wrapMode)};

  background: ${({ cardView, active }) =>
    cardView && active ? '#114758' : ''};
  border-left: ${({ cardView, active }) =>
    cardView && active ? '1px solid' : ''};
  /* same with slipbar */
  border-left-color: ${({ cardView, active }) =>
    cardView && active ? '#327faf' : ''};
  border-top-right-radius: ${({ cardView, active }) =>
    cardView && active ? '8px' : ''};
  border-bottom-right-radius: ${({ cardView, active }) =>
    cardView && active ? '8px' : ''};

  ${css.media.mobile`
    margin-right: ${() => getMarginRight('', true, false)};
  `};

  transition: all 0.25s;
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
export const Label = styled.span<TActive>`
  ${css.flex('align-center')};
  white-space: nowrap;

  color: ${({ active }) =>
    active ? theme('tabs.headerActive') : theme('tabs.header')};

  &:hover {
    color: ${theme('tabs.headerActive')};
    svg {
      fill: ${theme('tabs.headerActive')};
    }
  }
`
