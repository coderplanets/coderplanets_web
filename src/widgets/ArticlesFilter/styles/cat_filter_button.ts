import styled from 'styled-components'

import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex('align-center')};
  color: ${theme('thread.articleDigest')};
  margin-right: -12px;
  font-size: 13px;
`
export const Label = styled.div`
  opacity: 0.7;
`
