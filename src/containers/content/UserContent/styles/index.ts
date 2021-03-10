import styled from 'styled-components'

import { theme, css } from '@/utils'

export const Wrapper = styled.div`
  ${css.flexColumn('align-center')};
  width: 100%;
  overflow-x: hidden;
`
export const InnerWrapper = styled.div`
  ${css.flex()};
  width: 100%;
  ${({ metric }) => css.fitContentWidth(metric)};
`
export const BannerWrapper = styled.div`
  position: relative;
  background: ${theme('banner.bg')};
  width: 100%;
  height: 145px;
  margin-bottom: 20px;
  ${({ metric }) => css.fitPageWidth(metric)};
`
export const ContentWrapper = styled.div`
  flex-grow: 1;
  min-height: 600px;
  padding: 20px;
  padding-top: 15px;
  background: ${theme('thread.bg')};
`
export const TabBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 380px;
  width: 100%;
`
export const MobileBottom = styled.div`
  border-top: 1px dashed;
  border-top-color: ${theme('thread.articleDigest')};
  display: none;
  ${css.media.tablet`display: block`};
`
