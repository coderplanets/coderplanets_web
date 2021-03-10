import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  min-height: 50px;
  padding: 10px;
  margin-top: 20px;

  max-width: 300px;
  width: 100%;
  flex-wrap: wrap;

  ${css.media.tablet`
    width: 50%;
  `};

  ${css.media.mobile`
    width: 50%;
    padding: 10px;
  `};
`

export const holder = 1
