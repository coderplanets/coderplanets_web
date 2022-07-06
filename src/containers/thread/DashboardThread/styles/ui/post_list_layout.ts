import styled from 'styled-components'

import type { TActive } from '@/spec'

import css, { theme } from '@/utils/css'

import UpvoteSVG from '@/icons/Upvote'
import CommentSVG from '@/icons/Comment'
import { BaseSection, BlockBase } from '.'

export const Wrapper = styled(BaseSection)``
export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const Row = styled.div`
  ${css.flex('align-center')};
`
type TColumn = { center?: boolean; grow?: boolean }
export const Column = styled.div<TColumn>`
  ${css.flexColumn()};
  ${({ center }) => (center ? 'align-items: center;' : '')};
  ${({ grow }) => (grow ? 'flex-grow: 1;' : '')};
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
  height: 94px;
  padding: 16px 15px;
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
export const UpvoteIcon = styled(UpvoteSVG)<{ size: number }>`
  ${({ size }) => css.size(size)};
  fill: ${theme('thread.articleTitle')};
  transform: scaleY(0.8);
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(12)};
  fill: ${theme('thread.articleTitle')};
`
