import styled from 'styled-components'

import { css } from '@/utils'
import { CONTENT_WIDTH } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('justify-center')};
  width: ${`${CONTENT_WIDTH}px`};
  margin-top: 30px;
`
export const InnerWrapper = styled.div``
