import styled from 'styled-components'

import { css } from '@/utils'
import { CONTENT_WIDTH } from '../metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-both')};
  height: 100%;
  width: ${`${CONTENT_WIDTH}px`};
`
export const Holder = styled.div``
