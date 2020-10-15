import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flex()};
  width: 100%;
`
export const LeftPart = styled.div`
  flex-grow: 1;
  width: 100%;
`
export const WikiWrapper = styled.div`
  width: 90%;
`
export const RightPart = styled.div`
  ${css.flexColumn('align-start')};
  width: 280px;
  margin-left: 50px;
  padding-top: 5px;
  ${css.media.tablet`display: none;`};
`
export const PublisherWrapper = styled.div`
  width: 100%;
  max-width: 220px;
  margin-top: 10px;
`

export const MobileBottom = styled.div`
  display: none;
  ${css.media.tablet`display: block;`};
`
