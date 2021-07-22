import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('justify-between')};
  // height: 330px;
  height: 380px;
`
export const Title = styled.div``
