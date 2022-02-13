import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  width: 100%;
  /* NOTE:  those property must exist otherwise custom scroller will not work*/
  height: 100%;

  /* 30px is the modeLine height */
  ${css.media.mobile`
    height: auto;
  `};
`

export const holder = 1
