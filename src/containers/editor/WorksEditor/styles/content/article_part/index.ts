import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import { CONTENT_WIDTH } from '../../metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center', 'justify-start')};
  /* width: 100%; */
  width: 680px; // 652px;
  min-height: 300px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 20px;
`
export const Header = styled.div`
  ${css.flex('align-both', 'justify-between')};
  width: ${`${CONTENT_WIDTH}px`};
  margin-bottom: 16px;
  padding-bottom: 12px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
`
export const Section = styled.section`
  width: 100%;
  margin-bottom: 25px;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
  width: ${`${CONTENT_WIDTH}px`};
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  padding-top: 28px;
  margin-bottom: 50px;
`
