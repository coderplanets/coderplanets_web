import styled from 'styled-components'

import type { TTestable } from '@/spec'

// import Img from '@/Img'
import css from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-center')};
`

export const Title = styled.div``
