import styled from 'styled-components'

import { theme, cs } from 'utils'

export const Container = styled.div`
  ${cs.flex()};
  margin-top: 30px;
  margin-left: 6%;
  margin-right: 5%;

  ${cs.media.tablet`
    margin-top: 10px;
    margin-left: 2%;
    margin-right: 2%;
  `};
`

export const MainWrapper = styled.div`
  ${cs.flexColumn()};
  padding: 20px;
  padding-top: 10px;
  min-height: 600px;
  background: ${theme('preview.articleBg')};
  margin-right: 35px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  width: 70%;
  ${cs.media.tablet`width: 100%`};
`
export const TabberWrapper = styled.div`
  ${cs.flex()};
  width: 100%;
`
export const SidebarWrapper = styled.div`
  width: 24%;
  color: ${theme('banner.desc')};
  ${cs.media.tablet`display: none`};
`

export const MobileBottom = styled.div`
  border-top: 1px dashed;
  border-top-color: ${theme('thread.articleDigest')};
  display: none;
  ${cs.media.tablet`display: block`};
`
