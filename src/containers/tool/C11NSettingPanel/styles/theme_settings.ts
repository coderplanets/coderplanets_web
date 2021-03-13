import styled from 'styled-components'

import { TTestable } from '@/types'
// import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  margin-top: 16px;
  /* margin-left: 30px; */
`
export const Title = styled.div``
