import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  width: 100%;
  /* NOTE:  those property must exist otherwise custom scroller will not work*/
  height: 100%;
  overflow-y: scroll;

  /* 30px is the modeLine height */
  ${cs.media.mobile`
    height: auto;
  `};
`

export const holder = 1
