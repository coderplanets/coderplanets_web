import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex('justify-center')};
`
export const ContentWrapper = styled.div`
  ${css.flex('align-both')};
  transition: all 0.25s;
  /* TODO:  tmp */
  color: ${theme('thread.articleDigest')};
`
