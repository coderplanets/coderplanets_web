import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  padding: 32px 80px;
  padding-right: 85px;
`
export const ArticleFooter = styled.div`
  width: 100%;
  ${css.flex('align-both', 'justify-between')};
  color: ${theme('thread.articleDigest')};
`
export const CommentsWrapper = styled.div`
  min-height: 400px;
  margin-top: 32px;
  border-radius: 5px;
`
