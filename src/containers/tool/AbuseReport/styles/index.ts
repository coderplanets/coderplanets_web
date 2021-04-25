import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  padding: 25px 40px;
  color: ${theme('thread.articleDigest')};
`
export const ContentWrapper = styled.div``
