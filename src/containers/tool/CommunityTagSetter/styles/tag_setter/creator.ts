import styled from 'styled-components'

import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 300px;
`
export const InnerWrapper = styled.div`
  color: ${theme('thread.articleDigest')};
  /* ${css.flex()}; */
`
