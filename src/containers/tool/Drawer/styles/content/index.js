import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  width: 100%;
  /* NOTE:  those property must exist otherwise custom scroller will not work*/
  height: 100%;
  overflow-y: scroll;

  ${cs.media.mobile`
    height: auto;
    margin-bottom: 0;
  `};
`

export const holder = 1
