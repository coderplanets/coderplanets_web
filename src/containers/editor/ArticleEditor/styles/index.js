import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('justify-center')};
  width: 100%;
  margin-top: 30px;
`
export const InnerWrapper = styled.div`
  width: 100%;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
  color: ${theme('thread.articleDigest')};
  border: 1px solid;
`
