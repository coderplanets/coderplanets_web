import styled from 'styled-components'

import { C11N } from '@/constant'
import { cs } from '@/utils'

export const Wrapper = styled.footer.attrs((props) => ({
  'data-testId': props.testId,
}))`
  ${cs.flex('justify-center')};
  margin-top: ${({ layout }) => (layout === C11N.DIGEST_ROW ? '50px' : '0')};
`
export const Holder = 1
