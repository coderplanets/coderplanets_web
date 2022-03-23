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
  border-bottom: 1px solid;
  border-bottom-color: #eae9e9; // to-theme
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 2px;
`
export const UpvoteWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: -2px;
`
export const LabelsWrapper = styled.div`
  ${css.flex('align-center')};
  margin-left: -2px;
  margin-top: 7px;
  margin-bottom: 7px;
`
export const TagsWrapper = styled.div`
  margin-top: -2px;
`
export const Title = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  width: calc(100% - 40px);

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  line-height: 1.62;
  letter-spacing: 0.5px;
`
export const Desc = styled.div`
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  width: calc(100% - 35px);
  /* width: calc(100% - 5px); */
  /* width: 100%; */
  /* opacity: 0.9; */

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 1;
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
  padding-right: 6px;
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
