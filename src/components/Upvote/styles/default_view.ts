import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css, theme } from '@/utils'

type TInnerWrapper = {
  testid: string
}

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TInnerWrapper>`
  ${css.flex('align-center')};
`
export const Text = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
`
