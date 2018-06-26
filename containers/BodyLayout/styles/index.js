import styled from 'styled-components'
import { theme } from '../../../utils'

// transition: background-color 0.2s;
const Body = styled.div`
  padding-left: 56px;
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('bodyBg')};
  display: flex;
  flex-direction: column;
  margin-left: ${({ sidebarPin }) => (sidebarPin ? '180px' : '0')};
  transition: all 0.2s;
  overflow-x: ${({ sidebarPin }) => (sidebarPin ? 'hidden' : '')};
`
/* overflow-x: hidden; */

export default Body
