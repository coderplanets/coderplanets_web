import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  position: relative;
  height: 100%;
`
export const Banner = styled.div`
  padding: 20px 30px;
`
export const BannerTitle = styled.div`
  font-size: 17px;
  color: ${theme('thread.articleTitle')};
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 2px;
`
export const Title = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  font-weight: bold;
  margin-bottom: 16px;
  margin-left: 2px;
`
export const SubTitle = styled.div`
  font-size: 14px;
  color: ${theme('thread.articleDigest')};
  margin-bottom: 16px;
  margin-left: 2px;
`

export const Content = styled.div`
  padding: 0 30px;
  height: 100%;
  overflow-y: scroll;
`
export const Footer = styled.div`
  ${css.flex('align-center', 'justify-between')};
  width: 100%;
  padding: 0 30px;
  position: absolute;
  bottom: 18px;
  left: 0;
`
