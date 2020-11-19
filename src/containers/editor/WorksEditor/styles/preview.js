import styled from 'styled-components'

import { css } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('justify-center')};
  width: 560px;
  margin-top: 30px;
`
export const InnerWrapper = styled.div``
