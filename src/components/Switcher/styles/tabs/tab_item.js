import styled from 'styled-components'

import { cs, theme } from '@/utils'

import { getMarginRight, getPadding } from '../metric/tabs'

export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  color: ${theme('thread.articleTitle')};
  position: relative;
  height: 100%;
  z-index: 1;
  margin-right: ${({ size, mobileView, cardView }) =>
    getMarginRight(size, mobileView, cardView)};
  padding: ${({ size, cardView }) => getPadding(size, cardView)};
  text-align: center;
  min-width: ${({ cardView }) => (!cardView ? '0' : '33%')};
  cursor: pointer;

  /* for card view */
  margin-bottom: ${({ cardView }) => (cardView ? '8px' : '')};
  background: ${({ cardView, active }) =>
    cardView && active ? '#114758' : ''};
  border-left: ${({ cardView, active }) =>
    cardView && active ? '1px solid' : ''};
  /* same with slipbar */
  border-left-color: ${({ cardView, active }) =>
    cardView && active ? '#327faf' : ''};
  border-top-right-radius: ${({ cardView, active }) =>
    cardView && active ? '6px' : ''};
  border-bottom-right-radius: ${({ cardView, active }) =>
    !cardView && active ? '6px' : ''};

  ${cs.media.mobile`
    margin-right: ${() => getMarginRight('', true)};
  `};
`
export const Nav = styled.nav`
  position: relative;
  ${cs.flex('align-center')};
  flex-flow: row wrap;
  margin: 0 auto;
  padding: 0;
`
export const Label = styled.span`
  ${cs.flex('align-center')};
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
