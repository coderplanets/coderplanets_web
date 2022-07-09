import styled from 'styled-components'

import type { TMetric, TTestable } from '@/spec'

import css, { theme } from '@/utils/css'
import CrossSVG from '@/icons/CloseCross'
import ArrowSVG from '@/icons/Arrow'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')};
  width: 100%;
  height: 32px;
  background: ${theme('thread.articleTitle')};
  color: white;
`
type TInner = { metric: TMetric; center: boolean }
export const InnerWrapper = styled.div<TInner>`
  ${css.flex('align-center', 'justify-between')};
  justify-content: ${({ center }) => (center ? 'center' : 'justify-between')};
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
  position: relative;
  padding: 0 25px;
`
export const Desc = styled.div`
  font-size: 13px;
`
export const LinkText = styled(Desc)`
  color: white;
  font-size: 12px;
  text-decoration: underline;
`
export const LinkBtn = styled.div`
  background: white;
  color: ${theme('thread.articleTitle')};
  height: 16px;
  padding: 0 10px;
  font-size: 11px;
  border-radius: 4px;
`
export const Row = styled.div`
  ${css.flex('align-center')};
  margin-left: 10px;
`
export const CrossIcon = styled(CrossSVG)`
  ${css.size(12)};
  fill: white;
  opacity: 0.8;
  margin-left: 10px;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
export const ArrowIcon = styled(ArrowSVG)`
  ${css.size(12)};
  fill: white;
  opacity: 0.8;
  margin-left: 6px;
  transform: rotate(180deg);

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`
