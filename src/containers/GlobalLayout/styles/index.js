import styled from 'styled-components'

import { C11N } from '@/constant'
import { ASSETS_ENDPOINT } from '@/config'
import { theme, cs } from '@/utils'

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
  width: 100vw;
  /* min-width: ${({ minWidth }) => minWidth}; */
/*
  padding-left: ${({ noSidebar }) => (noSidebar ? '0' : '56px')};
  margin-left: ${({ sidebarPin }) => (sidebarPin ? '180px' : '0')};
 */
  position: relative;
  height: 100%;
  min-height: 100vh;
  background: ${theme('bodyBg')};
  transition: all 0.2s;
  overflow-x: ${({ sidebarPin }) => (sidebarPin ? 'hidden' : '')};
  ${cs.media.tablet`
    position: relative;
    padding-left: 0;
  `};
`
export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: ${({ layout, mobile }) => {
    if (mobile) return 'column'
    return layout === C11N.DIGEST ? 'column' : 'row'
  }};
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
