import styled from 'styled-components'

import { css } from '@/utils'
import { CONTENT_WIDTH, CONTENT_NARROW_WIDTH } from './metric'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testid,
}))`
  ${css.flexColumn('justify-center')};
  width: ${({ narrow }) =>
    narrow ? `${CONTENT_NARROW_WIDTH}px` : `${CONTENT_WIDTH}px`};

  margin-top: ${({ narrow }) => (narrow ? '100px' : '30px')};

  transition: width 0.2s;
`
export const InnerWrapper = styled.div``
