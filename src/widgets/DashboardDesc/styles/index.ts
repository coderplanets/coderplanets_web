import styled from 'styled-components'

import type { TTestable } from '@/spec'

// import Img from '@/Img'
// import { theme } from '@/utils/themes'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  padding: 130px;
  padding-top: 40px;
`

export const Title = styled.div``
