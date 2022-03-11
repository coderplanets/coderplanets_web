import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('thread.articleDigest')};
  ${css.flexColumn('align-start')};
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0 25px;
`
export const Title = styled.div`
  color: ${theme('thread.articleTitle')};
  width: 100%;
  font-size: 14px;
  padding-bottom: 8px;
`
export const Desc = styled.div`
  color: ${theme('thread.articleDigest')};
`
