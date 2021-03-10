import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.nav`
  ${css.flexColumn('align-both')};
  /* margin-left: 8px;

  ${css.media.laptopL`
    margin-left: -40px;
  `} */
`
export const Name = styled.div`
  color: ${theme('thread.articleDigest')};
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 10px;
`
