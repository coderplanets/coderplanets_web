import styled from 'styled-components'
import { theme, cs } from 'utils'

// transition: background-color 0.2s;
const Wrapper = styled.div`
  ${cs.flexColumn()};
  padding-left: ${({ noSidebar }) => (noSidebar ? '0' : '56px')};
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('bodyBg')};
  margin-left: ${({ sidebarPin }) => (sidebarPin ? '180px' : '0')};
  transition: all 0.2s;
  overflow-x: ${({ sidebarPin }) => (sidebarPin ? 'hidden' : '')};
  ${cs.media.tablet`padding-left: 0`};
`
/* overflow-x: hidden; */

export default Wrapper
