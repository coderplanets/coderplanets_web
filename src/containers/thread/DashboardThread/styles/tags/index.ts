import styled from 'styled-components'

import css from '@/utils/css'

export const Wrapper = styled.div`
  padding: 0 100px;
  padding-right: 120px;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn()};
`
export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`
