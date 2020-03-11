import styled from 'styled-components'

import { ASSETS_ENDPOINT } from '@config'
import Img from '@Img'
import { theme, cs } from '@utils'

// background: #3b5456;
export const Wrapper = styled.div`
  ${cs.flex('justify-center')};
  background-color: ${theme('spaceBg')};
  background-image: url(${ASSETS_ENDPOINT}/space-background.svg);
  background-attachment: fixed;
`
export const InnerWrapper = styled.div`
  ${cs.flexColumn()};
  max-width: ${cs.MAX_CONTENT_WIDTH};
  width: 100%;
  min-width: ${({ minWidth }) => minWidth};
/*
  padding-left: ${({ noSidebar }) => (noSidebar ? '0' : '56px')};
 */

  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('bodyBg')};
  /* margin-left: ${({ sidebarPin }) => (sidebarPin ? '180px' : '0')}; */
  transition: all 0.2s;
  overflow-x: ${({ sidebarPin }) => (sidebarPin ? 'hidden' : '')};
  ${cs.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`

// 180 is the sidebar full width
export const ContentPinWrapper = styled.div`
  margin-left: ${({ offsetLeft }) => (offsetLeft ? '180px' : '0')};
`

// 56 is the sidebar width
export const ContentWrapper = styled.div`
  margin-left: ${({ offsetLeft }) => (offsetLeft ? '56px' : '0')};

  ${cs.media.mobile`
    margin-left: 0;
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
