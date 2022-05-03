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
  ${css.lineClamp(1)}
  font-size: 15px;
  color: ${theme('thread.articleTitle')};
  width: 100%;
  font-weight: 500;

  line-height: 1.62;
`
export const Desc = styled.div`
  ${css.lineClamp(2)}
  font-size: 13px;
  color: ${theme('thread.articleDigest')};
  width: calc(100% - 35px);
  margin-top: 8px;
  line-height: 1.62;
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
