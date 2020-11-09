import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  margin-top: 25px;
`
export const ContentWrapper = styled.div`
  ${css.flex()};
  align-content: start;
  flex-wrap: wrap;
  max-width: calc(100% - 170px);
`
export const CardsWrapper = styled.div`
  ${css.flex('align-center')};
  flex-wrap: wrap;
  width: 100%;
`
