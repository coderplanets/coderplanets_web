import styled from 'styled-components'

import type { TTestable } from '@/spec'
// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  background: ${theme('modal.subPanel')};
`

export const ContentWrapper = styled.div`
  ${css.flex()};
`
