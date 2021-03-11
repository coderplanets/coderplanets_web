import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn()};
  width: 100%;
  padding: 20px;
`
export const CardWrapper = styled.div`
  width: 550px;
  height: auto;
  background: ${theme('code.bg')};
  margin: 10px;
  margin-right: 20px;
  overflow-y: scroll;

  ${css.media.mobile`
    width: 95%;
  `};
`

export const EmptyOffset = styled.div`
  margin-left: -5%;
`
