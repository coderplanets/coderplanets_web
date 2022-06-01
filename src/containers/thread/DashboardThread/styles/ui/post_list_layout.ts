import styled from 'styled-components'

import { TActive } from '@/spec'

import css, { theme } from '@/utils/css'

import UpvoteSVG from '@/icons/Upvote'
import CommentSVG from '@/icons/Comment'
import { BaseSection } from '.'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`
export const Section = styled(BaseSection)``
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  margin-bottom: 20px;
`
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
  margin-top: 10px;
  opacity: ${({ $active }) => ($active ? 1 : 0.65)};
  color: ${({ $active }) =>
    $active ? theme('thread.articleTitle') : theme('thread.articleDigest')};

  ${Layout}:hover & {
    opacity: 1;
    cursor: pointer;
  }
  transition: all 0.2s;
`
export const Block = styled.div<TActive>`
  opacity: ${({ $active }) => ($active ? 0.65 : 0.2)};
  width: 300px;
  height: 94px;
  border: 2px solid;
  border-radius: 7px;
  border-color: ${theme('thread.articleTitle')};
  padding: 16px 15px;

  ${Layout}:hover & {
    opacity: 0.65;
    cursor: pointer;
  }

  transition: all 0.2s;
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
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(12)};
  fill: ${theme('thread.articleTitle')};
`
