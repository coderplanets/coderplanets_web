import styled from 'styled-components'
import { theme, cs } from 'utils'

import Img from 'components/Img'

// transition: background-color 0.2s;
export const Wrapper = styled.div`
  ${cs.flexColumn()};
  padding-left: ${({ noSidebar }) => (noSidebar ? '0' : '56px')};
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('bodyBg')};
  margin-left: ${({ sidebarPin }) => (sidebarPin ? '180px' : '0')};
  transition: all 0.2s;
  overflow-x: ${({ sidebarPin }) => (sidebarPin ? 'hidden' : '')};
  ${cs.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`
export const SubCommunitiesExpander = styled.div`
  display: none;
  ${cs.media.tablet`
    ${cs.flex('align-both')};
    width: 30px;
    position: fixed;
    top: 10%;
    left: 0;
    z-index: 100;
    border: 1px solid;
    border-color: ${theme('content.cardBg')};
    border-radius: 0 10px 10px 0;
    height: 40px;
    background-color: ${theme('banner.numberHoverBg')};
    box-shadow: ${theme('preview.shadow')};
  `};
`

// expander_more
export const ExpanderIcon = styled(Img)`
  fill ${theme('banner.desc')};
  width: 18px;
  height: 20px;
  display: block;
`
