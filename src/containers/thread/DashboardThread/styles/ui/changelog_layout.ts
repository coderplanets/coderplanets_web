import styled from 'styled-components'

import type { TActive } from '@/spec'

import css, { theme } from '@/utils/css'

import UpvoteSVG from '@/icons/Heart'
import CommentSVG from '@/icons/Comment'

import { Bar, BaseSection, BlockBase } from '.'

export { Bar } from '.'

export const Wrapper = styled(BaseSection)``

export const SelectWrapper = styled.div`
  ${css.flex('align-center')};
  width: 100%;
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
  height: 430px;
  padding: 16px 15px;
`

export const Picture = styled.div<{ small?: boolean }>`
  width: 100%;
  height: ${({ small }) => (small ? '80px;' : '100px;')};
  border-radius: 5px;
  background: ${theme('border')};
`

export const MiniItem = styled.div`
  ${css.flex('align-center')};
  width: 100%;
`
export const Cover = styled.div`
  ${css.flexColumn('align-both')};
  border: 1px solid;
  border-color: ${theme('thread.articleDigest')};
  width: 34px;
  height: 36px;
  border-radius: 4px;
`
export const MiniPic = styled.div`
  width: 30px;
  height: 16px;
  border-radius: 5px;
  background: ${theme('border')};
`
export const MiniIntro = styled.div`
  width: 100%;
  margin-left: 14px;
`
export const MiniBar = styled(Bar)`
  width: ${({ long }) => `${long || 10}%`};
  height: ${({ thin }) => (thin ? '3px' : '7px')};
  background: ${({ thin }) =>
    thin ? theme('thread.articleDigest') : theme('thread.articleTitle')};
  opacity: 0.6;
  z-index: 3;
  border-radius: 2px;
`
export const Circle = styled.div<{ radius?: number }>`
  ${({ radius }) => `${css.circle(radius || 22)}`};
  background: ${theme('thread.articleTitle')};
`
export const UpvoteIcon = styled(UpvoteSVG)<{ size: number }>`
  ${({ size }) => css.size(size)};
  fill: ${theme('thread.articleTitle')};
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(12)};
  fill: ${theme('thread.articleTitle')};
`
