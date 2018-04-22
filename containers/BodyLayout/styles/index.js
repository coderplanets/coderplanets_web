import styled from 'styled-components'
import { theme } from '../../../utils'

// transition: background-color 0.2s;
const Body = styled.div`
  padding-left: 56px;
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('body_bg')};
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.sidebarPin ? '180px' : '0')};
  transition: all 0.2s;
  overflow-x: ${props => (props.sidebarPin ? 'hidden' : '')};
`
/* overflow-x: hidden; */

export default Body
