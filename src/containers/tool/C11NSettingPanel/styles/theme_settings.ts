import styled from 'styled-components'

import type { TTestable } from '@/spec'
// import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  margin-top: 16px;
  /* margin-left: 30px; */
`
export const Title = styled.div``
