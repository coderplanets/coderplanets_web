import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex()};
  background: ${theme('thread.bg')};
  width: 100%;
  height: 80vh;
  padding: 30px;
`
export const Title = styled.div``
