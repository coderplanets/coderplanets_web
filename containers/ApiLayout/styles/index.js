import styled from 'styled-components'
import { theme } from '../../../utils'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('body_bg')};
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
`

export default Wrapper
