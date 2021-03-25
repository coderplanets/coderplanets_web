import styled from 'styled-components'

import { theme, css } from '@/utils'

import CommunityFaceLogo from '@/components/CommunityFaceLogo'

// import { getPadding } from '../../metrics'

export const Wrapper = styled.div<{ noBottomBorder: boolean }>`
  ${css.flex('align-center')};
  margin-bottom: ${({ noBottomBorder }) => (noBottomBorder ? '20px' : '30px')};
  padding-bottom: ${({ noBottomBorder }) => (noBottomBorder ? '0' : '35px')};
  border-bottom: ${({ noBottomBorder }) =>
    noBottomBorder ? 'none' : '1px solid'};
  border-bottom-color: ${({ noBottomBorder }) =>
    noBottomBorder ? 'transparent' : '#003949'};
`
export const MainInfos = styled.div`
  ${css.flex('justify-between')};
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: 12px;
  margin-left: 5px;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
  transition: opacity 0.25s;

  ${css.media.tablet`display: none;`};
`
export const SiteInfo = styled.div`
  ${css.flex('align-center')};
  margin-top: 3px;
`
export const SiteLogo = styled(CommunityFaceLogo)`
  ${css.size(22)};
  margin-right: 12px;
  margin-top: -5px;
  margin-left: 2px;
`
export const SiteTitle = styled.div`
  color: #007fa8;
  font-size: 18px;
  font-weight: bold;
  margin-right: 25px;
`
export const SiteDesc = styled.a`
  color: ${theme('footer.title')};
  display: block;
  text-decoration: none;
  margin-left: 24px;
  opacity: 0.8;

  font-size: 14px;

  &:hover {
    color: ${theme('footer.hover')};
    text-decoration: underline;
    cursor: pointer;
    opacity: 1;
  }
  transition: all 0.2s;
`
