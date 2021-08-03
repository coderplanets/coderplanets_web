import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flexColumn()};
`

export const ErrText = styled.div`
  color: ${theme('baseColor.red')};
`
