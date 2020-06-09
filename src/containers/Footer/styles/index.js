import styled from 'styled-components'
import { cs } from '@/utils'

export const Wrapper = styled.footer.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex('justify-center')};
`
export const Holder = 1
