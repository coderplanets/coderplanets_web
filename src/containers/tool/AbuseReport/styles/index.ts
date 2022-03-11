import styled from 'styled-components'

import type { TTestable } from '@/spec'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  color: ${theme('thread.articleDigest')};
  ${css.flexColumn()};
  min-height: 320px;
`
export const ContentWrapper = styled.div``
