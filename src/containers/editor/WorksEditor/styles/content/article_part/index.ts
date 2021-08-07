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
  width: 658px;
  min-height: 300px;
  color: ${theme('thread.articleDigest')};
  padding: 20px 0;
  margin-top: 20px;
`
export const EditorWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  margin-top: 10px;
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
