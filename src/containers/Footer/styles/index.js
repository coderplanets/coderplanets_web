import styled from 'styled-components'
import { cs } from '@/utils'

export const Wrapper = styled.footer.attrs((props) => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('justify-center')};
  margin-top: ${({ layout }) => (layout === 'left-right' ? '50px' : '0')};
`
export const Holder = 1
