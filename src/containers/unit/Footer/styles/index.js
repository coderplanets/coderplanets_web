import styled from 'styled-components'

import { C11N } from '@/constant'
import { css, WIDTH } from '@/utils'

export const Wrapper = styled.footer.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flex('justify-center')};
  margin-top: ${({ layout }) => (layout === C11N.DIGEST_ROW ? '50px' : '80px')};
  max-width: ${WIDTH.COMMUNITY.PAGE};
`
export const Holder = 1
