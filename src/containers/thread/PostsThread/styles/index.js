import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  padding-top: 8px;
  width: 100%;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const RightPart = styled.div`
  min-width: 230px;
  margin-left: 80px;
  padding-top: 38px;
  padding-left: 25px;

  ${css.media.laptopL`
    margin-left: 60px;
  `};
  ${css.media.tablet`display: none;`};
`
export const PublisherWrapper = styled.div`
  width: 100%;
  max-width: 180px;
  margin-left: 8%;
`
export const FilterWrapper = styled.div`
  ${css.flex('align-center')};
  margin-bottom: 8px;
  margin-left: -4px;
  ${css.media.mobile`margin-bottom: 4px;`};
`
