import styled from 'styled-components'

// import Img from '@components/Img'
import { cs, theme } from '@utils'

export const Wrapper = styled.div.attrs(props => ({
  'data-testid': props.testid,
}))`
  ${cs.flex()};
  background: ${theme('thread.bg')};
  width: 100%;
  height: 80vh;
  padding: 30px;
`
export const Title = styled.div``
