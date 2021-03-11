import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-height: 80vh;
`
export const ContentWrapper = styled.div`
  ${css.flex('justify-center')};
  ${({ metric }) => css.fitContentWidth(metric)};
  width: 100%;
  margin-top: 20px;
`
export const CoverWrapper = styled.div`
  ${css.flex()};
  flex-wrap: wrap;
  padding: 80px 30px;
  padding-right: 10px;
`
