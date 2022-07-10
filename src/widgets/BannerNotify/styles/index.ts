import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { includes } from 'ramda'

import type { TMetric, TTestable, TColorName } from '@/spec'
import { COLORS, COLOR_NAME } from '@/constant'

import css from '@/utils/css'
import CrossSVG from '@/icons/CloseCross'
import ArrowSVG from '@/icons/Arrow'
import NotifySVG from '@/icons/Trumpet'

type TWrapper = TTestable & { bg: TColorName }
export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flex('align-both')};
  width: 100%;
  height: 33px;
  background: ${({ bg }) => COLORS[bg]};
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
  font-weight: 500;
`
export const LinkText = styled(Desc)`
  color: white;
  font-size: 12px;
  text-decoration: underline;
`
export const LinkBtn = styled.div<{ bg: TColorName }>`
  background: ${({ bg }) =>
    includes(bg, [COLOR_NAME.BLACK])
      ? lighten(0.06, COLORS[bg])
      : darken(0.1, COLORS[bg])};
  color: white;
  height: 18px;
  padding: 1px 12px;
  font-size: 11px;
  border-radius: 4px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const Row = styled.div`
  ${css.flex('align-center')};
  margin-left: 10px;
`
export const NotifyIcon = styled(NotifySVG)`
  ${css.size(15)};
  margin-right: 12px;
  fill: white;
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
