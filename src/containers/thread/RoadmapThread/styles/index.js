import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flex()};
  background: ${theme('thread.bg')};
  width: 100%;
  height: 80vh;
  padding: 30px;
`
export const Title = styled.div``
