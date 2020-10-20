import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`

export const ErrText = styled.div`
  color: ${theme('baseColor.red')};
`
