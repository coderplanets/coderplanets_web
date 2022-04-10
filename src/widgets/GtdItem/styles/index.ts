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
  background: white;
  padding-top: 10px;
  padding-bottom: 12px;
  margin-top: 3px;
  margin-bottom: 12px;
  padding: 10px;
  border-radius: 12px;
`
export const Header = styled.div`
  ${css.flex('align-center', 'justify-between')};
  margin-bottom: 10px;
`
export const TimeStamp = styled.div`
  font-size: 12px;
  color: ${theme('thread.extraInfo')};
`
export const Title = styled.div`
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  width: calc(100% - 10px);

  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 1;
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
  margin-top: 8px;
  /* width: calc(100% - 5px); */
  /* width: 100%; */
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
  margin-top: 18px;
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
