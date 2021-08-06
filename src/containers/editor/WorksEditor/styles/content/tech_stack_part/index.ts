import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-start', 'justify-start')};
  width: 100%;
  min-height: 480px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 30px;
`
export const TechsWrapper = styled.div`
  width: 100%;
  min-height: 300px;
  margin-top: 30px;
  margin-bottom: 25px;
`
export const Footer = styled.div`
  ${css.flex('align-both')};
  width: 100%;
  border-top: 2px solid;
  border-top-color: #03343f;
  margin-top: 35px;
  padding-top: 20px;
  margin-left: -30px;
`
