import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const ResultText = styled.div`
  color: ${theme('thread.filterResultHint')};
`
