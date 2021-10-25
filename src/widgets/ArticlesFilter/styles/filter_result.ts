import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const ResultText = styled.div`
  color: ${theme('thread.filterResultHint')};
`
