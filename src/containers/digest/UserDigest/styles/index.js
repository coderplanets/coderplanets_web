import styled from 'styled-components'
import { theme, css } from '@/utils'

export const BannerContainer = styled.nav`
  ${css.flexColumn('justify-center')};

  position: relative;
  min-height: 200px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid;
  background: ${theme('banner.bg')};
  border-bottom-color: ${theme('banner.spliter')};
  width: 100%;

  transition: max-height 0.2s;
`

export const BannerContentWrapper = styled.div`
  ${css.flex('justify-between')};
  width: 100%;
  max-width: ${({ metric }) => css.getContentMaxWidth(metric)};
`
export const UserBriefWrapper = styled.div`
  width: 60%;
  ${css.media.tablet`width: 100%`};
`
export const UserContributesWrapper = styled.div`
  width: 36%;
  max-width: 450px;
  margin-top: 10px;
  ${css.media.tablet`display: none`};
`
