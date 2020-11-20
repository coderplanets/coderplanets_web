import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-both')};
  width: 100%;
  height: 100%;
  color: ${theme('thread.articleDigest')};
`
export const Holder = styled.div``
