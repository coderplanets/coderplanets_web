import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { css } from '@/utils'

type TWrapper = { type: string } & TTestable

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TWrapper>`
  ${css.flexColumn('justify-between')};
  height: auto;
`
export const Title = styled.div``
