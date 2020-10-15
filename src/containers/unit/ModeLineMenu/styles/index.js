import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('align-both')};
  height: 100%;
  padding: 0 6vw;
`
export const Title = styled.div``
