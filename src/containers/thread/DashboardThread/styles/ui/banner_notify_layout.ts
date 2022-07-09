import styled from 'styled-components'
import { lighten, darken } from 'polished'
import { includes } from 'ramda'

import type { TActive, TColorName } from '@/spec'
import { COLORS, COLOR_NAME } from '@/constant'

import css, { theme } from '@/utils/css'

import { Divider } from '@/widgets/Common'
import CrossSVG from '@/icons/CloseCross'
import ArrowSVG from '@/icons/Arrow'

import { BaseSection, BlockBase } from '.'

export const Wrapper = styled(BaseSection)``
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
type TNotifyBar = { center?: boolean; bg: TColorName }
export const NotifyBar = styled.div<TNotifyBar>`
  ${css.flex('align-center')};
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  width: calc(100% + 2px);
  height: 17px;
  margin-top: -1px;
  margin-left: -1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid;
  border-color: ${({ bg }) => COLORS[bg]};
  background: ${({ bg }) => COLORS[bg]};
  padding: 0 20px;
  padding-bottom: 2px;
`
export const NotifyDesc = styled.div`
  color: white;
  font-size: 8px;
  font-weight: 600;
`
export const NotifyLink = styled(NotifyDesc)`
  text-decoration: underline;
`
export const NotifySolidLink = styled.div<{ bg: TColorName }>`
  background: ${({ bg }) =>
    includes(bg, [COLOR_NAME.BLACK])
      ? lighten(0.06, COLORS[bg])
      : darken(0.1, COLORS[bg])};

  color: white;
  border-radius: 5px;
  font-size: 6px;
  color: ${'theme.articleTitle'};
  font-weight: bold;
  padding: 0 4px;
`
export const CrossIcon = styled(CrossSVG)`
  fill: white;
  ${css.size(8)};
  opacity: 0.8;
  margin-right: -3px;
`
export const ArrowIcon = styled(ArrowSVG)`
  fill: white;
  ${css.size(8)};
  opacity: 0.8;
  transform: rotate(180deg);
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
export const Main = styled.div`
  ${css.flex()};
  padding: 0 20px;
  margin-top: 25px;
`
export const ListsWrapper = styled.div`
  border-right: 1px solid;
  border-right-color: ${theme('border')};
  width: 85%;
`
export const TagssWrapper = styled.div`
  width: 15%;
  margin-left: 20px;
`
export const ExampleBtn = styled.div`
  display: inline-block;
`
export const Layout = styled.div`
  ${css.flexColumn('align-both')};
`
export const LayoutTitle = styled.div<TActive>`
  opacity: ${({ $active }) => ($active ? 1 : 0.65)};

  ${Layout}:hover & {
    opacity: 1;
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const Block = styled(BlockBase)`
  width: 300px;
  height: 200px;
  padding: 0px;
`
export const DividerLine = styled(Divider)`
  opacity: 0.8;
`
type TBar = { long: number; thin?: boolean }
export const Bar = styled.div<TBar>`
  width: ${({ long }) => `${long || 10}%`};
  height: ${({ thin }) => (thin ? '4px' : '10px;')};
  background: ${({ thin }) =>
    thin ? theme('thread.articleDigest') : theme('thread.articleTitle')};
  z-index: 3;
  border-radius: 5px;
  opacity: ${({ thin }) => (thin ? 0.6 : 1)};
`
export const Circle = styled.div<{ radius?: number }>`
  ${({ radius }) => `${css.circle(radius || 22)}`};
  background: ${theme('thread.articleTitle')};
`
export const BgWrapper = styled.div`
  ${css.flex('align-center')};
`
export const BgLabel = styled.div<{ bg: TColorName }>`
  ${css.circle(24)}
  ${css.flex('align-both')};
  border: 1px solid;
  border-color: ${({ bg }) => COLORS[bg]};
  cursor: pointer;
  margin-left: 10px;
`
export const TheColor = styled.div<{ color: TColorName }>`
  ${css.circle(18)};
  background-color: ${({ color }) => COLORS[color]};
`
