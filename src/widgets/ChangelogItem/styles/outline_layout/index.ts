import styled from 'styled-components'

import type { TTestable } from '@/spec'

import css, { theme } from '@/utils/css'

import CommentSVG from '@/icons/Comment'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-start')};
  margin-bottom: 14px;
`
export const Main = styled.div`
  width: 574px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 15px;
  font-weight: 580;
  margin-bottom: 2px;
`
export const Version = styled.span`
  color: ${theme('thread.articleDigest')};
  display: inline-block;
  font-size: 15px;
  font-weight: 480;
  opacity: 0.6;
  margin-left: 8px;
  margin-bottom: 1px;
`
export const Body = styled.div`
  color: ${theme('thread.articleDigest')};
  ${css.lineClamp(1)};
  font-size: 14px;
  opacity: 0.9;
`
export const Footer = styled.div`
  ${css.flex('align-center')};
  margin-top: 20px;
  margin-left: -5px;
`
export const CommentWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: 20px;
`
export const CommentIcon = styled(CommentSVG)`
  ${css.size(13)};
  fill: ${theme('thread.extraInfo')};
`
export const Text = styled.div`
  color: ${theme('thread.extraInfo')};
  font-size: 13px;
  margin-left: 6px;
`
export const Side = styled.div`
  ${css.flexColumn('align-end')};
  color: ${theme('thread.articleDigest')};
  flex-grow: 1;
`
export const DateTime = styled.div`
  font-size: 12px;
  margin-top: 4px;
  opacity: 0.6;
`
export const TagsWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: 10px;
  opacity: 0.8;
  margin-right: 2px;
`
export const TagDot = styled.div<{ color: string }>`
  ${css.circle(5)};
  background-color: ${({ color }) => theme(`baseColor.${color.toLowerCase()}`)};
  margin-left: 6px;
`
