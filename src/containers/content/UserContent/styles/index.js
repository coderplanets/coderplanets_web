import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Container = styled.div`
  ${css.flex()};
  margin-top: 30px;
  margin-left: 6%;
  margin-right: 5%;

  ${css.media.tablet`
    margin-top: 10px;
    margin-left: 2%;
    margin-right: 2%;
  `};
`

export const MainWrapper = styled.div`
  ${css.flexColumn()};
  padding: 20px;
  padding-top: 6px;
  min-height: 600px;
  background: ${theme('drawer.articleBg')};
  margin-right: 35px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  width: 70%;
  ${css.media.tablet`width: 100%`};
`
export const TabBarWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  border-bottom: 1px solid;
  border-bottom-color: #0a4859;
  margin-bottom: 10px;
`
export const SidebarWrapper = styled.div`
  width: 24%;
  color: ${theme('banner.desc')};
  ${css.media.tablet`display: none`};
`

export const MobileBottom = styled.div`
  border-top: 1px dashed;
  border-top-color: ${theme('thread.articleDigest')};
  display: none;
  ${css.media.tablet`display: block`};
`
