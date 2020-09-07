import styled from 'styled-components'

import { cs } from '@/utils'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  ${cs.media.mobile`
    height: auto;
    margin-bottom: 10%;
  `};
`

export const holder = 1
