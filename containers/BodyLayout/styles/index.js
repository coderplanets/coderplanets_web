import styled from 'styled-components'
import { theme } from '../../../utils/themes'

const Body = styled.div`
  padding-left: 56px;
  position: relative;
  height: 100vh;
  background: ${theme('body_bg')};
  transition: background-color 0.3s;
  display: flex;
  flex-direction: column;
`

export default Body
