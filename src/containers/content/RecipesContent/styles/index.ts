import styled from 'styled-components'

import { css } from '@/utils'

import { SIDEBAR_WIDTH } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('align-both')}
  width: 100%;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  margin-top: 12px;
  min-height: 100vh;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const ContentWrapper = styled.div`
  ${css.flexColumnGrow()};
  max-width: ${() => `calc(100% - ${SIDEBAR_WIDTH})`};
`
