import styled from 'styled-components'

import { TTestable } from '@/types'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flex('align-both')};
  height: 100%;
  padding: 0 6vw;
`
export const Title = styled.div``
