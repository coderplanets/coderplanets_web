import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  ${css.flex()};
  /* margin-right: -30px; */
`
export const InnerWrapper = styled.div`
  ${css.flex('justify-start')};
  flex-wrap: wrap;

  ${css.media.mobile`
    margin-left: -10px;
  `};
`
