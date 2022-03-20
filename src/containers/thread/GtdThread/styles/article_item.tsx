import styled from 'styled-components'

import type { TTestable } from '@/spec'
import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  /* ${css.flex('align-start', 'justify-between')}; */
  width: 100%;
  position: relative;
`
export const UpvoteWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
export const LabelsWrapper = styled.div`
  ${css.flex('align-center')};
  margin-top: -2px;
  margin-left: -2px;
  margin-bottom: 2px;
`
export const TagsWrapper = styled.div`
  margin-top: -2px;
`
export const Title = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  width: 85%;

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: 1.62;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  width: 85%;
  /* opacity: 0.9; */

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: 1.62;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  font-size: 12px;
  color: ${theme('thread.extraInfo')};
  margin-bottom: 20px;
`
export const Author = styled.div`
  ${css.flex('align-center')};
`
export const Avatar = styled(Img)`
  ${css.circle(14)};
`
export const Name = styled.div`
  margin-left: 6px;
`
