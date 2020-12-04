import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('justify-center')};
  width: 100%;
  color: ${theme('thread.articleDigest')};
  margin-top: 30px;
`
export const InnerWrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  min-height: 80vh;
  ${({ metric }) => css.fitContentWidth(metric)};
`
