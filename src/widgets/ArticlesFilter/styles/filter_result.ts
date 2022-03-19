import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
`
export const ResultText = styled.div`
  color: ${theme('thread.extraInfo')};
`
