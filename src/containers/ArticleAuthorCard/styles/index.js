import styled from 'styled-components'

import { cs } from '@utils'

export const Wrapper = styled.div`
  min-height: 50px;
  padding: 10px;
  margin-top: 20px;

  max-width: 300px;
  width: 100%;
  flex-wrap: wrap;

  ${cs.media.tablet`
    width: 50%;
  `};

  ${cs.media.mobile`
    width: 50%;
    padding: 10px;
  `};
`

export const holder = 1
