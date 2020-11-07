import styled from 'styled-components'

import { css, WIDTH } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  padding: 10px 6vw;
  margin-top: 12px;
  width: 100%;
  max-width: ${WIDTH.COMMUNITY.PAGE};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 4px;
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
